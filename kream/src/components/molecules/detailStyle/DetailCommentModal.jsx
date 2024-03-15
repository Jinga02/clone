/** @format */

import React from "react";
import Modal from "utils/Modal";
import CommentTitle from "./comment/CommentTitle";
import CommentHost from "./comment/CommentHost";
import CommentInput from "./comment/CommentInput";
import CommentContent from "./comment/CommentContent";

export default function DetailCommentModal({
  profileImageUrl,
  nickname,
  createTime,
  comments,
  isOpen,
  closeModal,
}) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      modalStyle="w-420px h-full bg-white absolute right-0"
    >
      <CommentTitle />
      <CommentHost
        profileImageUrl={profileImageUrl}
        nickname={nickname}
        createTime={createTime}
      />
      <CommentInput profileImageUrl={profileImageUrl} />
      <CommentContent comments={comments} />
    </Modal>
  );
}
