import { useState } from "react";

export const Comment = ({
  comment,
  reply,
  replyScore,
  isReply,
  commentScore,
  setCommentScore,
}) => {
  const [replyScoreState, setReplyScore] = useState(replyScore);

  const addOneHandler = () => {
    if (isReply) {
      setReplyScore((prev) => prev + 1);
    } else if (!isReply) {
      setCommentScore((prev) => prev + 1);
    }
  };

  const subtractOneHandler = () => {
    if (isReply) {
      setReplyScore((prev) => prev - 1);
    } else if (!isReply) {
      setCommentScore((prev) => prev - 1);
    }
  };
  return (
    <div className={`${isReply ? "border-l-2 border-gray-400/40" : ""}`}>
      <div className={`${isReply ? "ml-4" : ""} bg-white p-4 rounded-md`}>
        <span className="flex items-center gap-4 ">
          <img
            src={isReply ? reply.user.image.png : comment.user.image.png}
            className="w-9"
            alt=""
          />
          <p className="font-bold">
            {isReply ? reply.user.username : comment.user.username}
          </p>
          <p>{isReply ? reply.createdAt : comment.createdAt}</p>
        </span>
        <div>
          <p>
            <span className="text-purple-500">
              {isReply ? `@${reply.replyingTo} ` : ""}
            </span>
            {isReply ? reply.content : comment.content}
          </p>
          <div className="flex items-center justify-between pt-5">
            <span className="flex p-3 bg-purple-100 gap-2 items-center">
              <button onClick={addOneHandler}>+</button>
              <p className="font-bold">
                {isReply ? replyScoreState : commentScore}
              </p>
              <button onClick={subtractOneHandler}>-</button>
            </span>
            <button>reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};
