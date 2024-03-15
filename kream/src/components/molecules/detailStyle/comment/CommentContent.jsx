/** @format */

import React from "react";
import CommentBox from "components/molecules/common/CommentBox";

export default function CommentContent({ comments }) {
  return (
    <div className="w-full h-full border-t border-black border-opacity-30 ">
      <ul className="w-full h-full overflow-scroll">
        {comments.map((comment, index) => (
          <CommentBox
            key={index}
            comment={comment}
            liStyle="w-full px-24px py-12px"
          />
        ))}
      </ul>
    </div>
  );
}
