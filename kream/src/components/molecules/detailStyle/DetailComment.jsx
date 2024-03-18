/** @format */

import React from "react";
import Span from "components/atom/Span";
import Title from "components/atom/Title";
import DetailCommentModal from "./DetailCommentModal";
import CommentBox from "../common/CommentBox";
import useModal from "./../../../hook/useModal";

export default function DetailComment({
  comments,
  profileImageUrl,
  nickname,
  createTime,
}) {
  const { isOpen, openModal, closeModal } = useModal();
  const noComments = comments.length === 0;

  return (
    <div className="w-full min-h-[188px] py-30px">
      <Title name={`댓글 ${comments.length}개`} styleName="font-bold text-lg" />
      <div className="w-full h-full ">
        {noComments ? (
          <NoCommentMessage />
        ) : (
          <ul>
            {comments.slice(0, 2).map((comment, index) => (
              <CommentBox
                comment={comment}
                key={index}
                liStyle="py-12px w-full h-60px"
              />
            ))}
            {comments.length > 2 && (
              <>
                <Span
                  click={openModal}
                  name="댓글 더보기..."
                  styleName="pl-42px text-sm opacity-50 leading-10"
                />
                <DetailCommentModal
                  isOpen={isOpen}
                  closeModal={closeModal}
                  nickname={nickname}
                  createTime={createTime}
                  profileImageUrl={profileImageUrl}
                  comments={comments}
                />
              </>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

function NoCommentMessage() {
  return (
    <Span
      name="첫번째로 댓글을 남겨보세요"
      styleName="text-lg font-bold opacity-50"
    />
  );
}
