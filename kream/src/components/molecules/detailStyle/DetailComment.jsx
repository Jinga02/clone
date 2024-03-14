/** @format */

import React, { useEffect, useState } from "react";
import Image from "components/atom/Image";
import Span from "components/atom/Span";
import Title from "components/atom/Title";
import koLocale from "timeago.js/lib/lang/ko";
import { format, register } from "timeago.js";
import Modal from "utils/Modal";
import Button from "components/atom/Button";

register("ko", koLocale);

export default function DetailComment({ comments }) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [visibleComments, setVisibleComments] = useState(comments.slice(0, 2));
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const noComments = comments.length === 0;
  const hasMoreComments = comments.length > visibleComments.length;

  const handleShowAllComments = () => {
    setShowAllComments(true);
    setVisibleComments(comments);
  };

  return (
    <div className="w-full min-h-[188px] py-30px">
      <Title name={`댓글 ${comments.length}개`} styleName="font-bold text-lg" />
      <div className="w-full h-full ">
        {noComments ? (
          <NoCommentMessage />
        ) : (
          <ul>
            {visibleComments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
            {hasMoreComments && !showAllComments && (
              <>
                <Span
                  click={openModal}
                  name="댓글 더보기..."
                  styleName="opacity-50"
                />
                <Modal
                  isOpen={isOpen}
                  closeModal={closeModal}
                  modalStyle="w-420px h-full bg-white absolute right-0"
                >
                  <div className="flex justify-start items-center px-56px py-30px ">
                    <Button name="X" styleName="relative text-lg mr-4" />
                    <Title name="댓글" styleName="font-bold text-xl" />
                  </div>
                  <div>
                    <Image />
                  </div>
                  <div></div>
                </Modal>
                {/* <li className="w-full h-60px py-12px flex items-center">
                  <Span
                    name="댓글 더보기..."
                    styleName="pl-42px opacity-50 cursor-pointer"
                    click={handleShowAllComments}
                  />
                </li> */}
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

function CommentItem({ comment }) {
  return (
    <li className="w-full h-60px py-12px flex items-center">
      <Image url={comment.url} styleName="w-34px h-34px mr-4 rounded-full" />
      <div>
        <div className="">
          <Span name={comment.nickname} styleName="mr-4 font-bold" />
          <Span name={comment.text} />
        </div>
        <div>
          <Span
            name={format(comment.createTime, "ko")}
            styleName="mr-4 opacity-40"
          />
          <Span name="답글쓰기" styleName="opacity-50 font-bold" />
        </div>
      </div>
    </li>
  );
}
