import { useState } from "react";
import { Comment } from "./Comment";

export const Comments = ({ comment }) => {
  let [commentScore, setCommentScore] = useState(comment.score);
  return (
    <div
      key={comment.id}
      className="flex text-left justify-center items-center flex-col gap-4"
    >
      <Comment
        comment={comment}
        commentScore={commentScore}
        setCommentScore={setCommentScore}
        isReply={false}
      />
      <div className="border-l-2 border-gray-400/40">
        {comment.replies.map((replies) => (
          <Comment reply={replies} replyScore={replies.score} isReply={true} />
        ))}
      </div>
    </div>
  );
};
