/** @format */

import Form from "components/atom/Form";
import ImageButton from "components/atom/ImageButton";
import Input from "components/atom/Input";
import React from "react";

export default function CommentInput() {
  return (
    <div className="w-full h-62px px-24px py-10px flex justify-start items-center  border-t border-black border-opacity-30">
      <ImageButton styleName="w-9 h-9 mr-3" imgStyle="rounded-full" imgUrl="" />
      <Form styleName="w-96% h-full">
        <Input
          inputStyle="w-full h-full pl-3 text-sm bg-gray opacity-40 border border-black border-opacity-30 rounded-full"
          placeholder="댓글을 남기세요..."
        />
      </Form>
    </div>
  );
}
