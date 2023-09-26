import { useState } from "react";
import { ReplyIput } from "./ReplyInput";
import { UserReply } from "./UserReply";

export const Comment = ({
  comment,
  reply,
  replyScore,
  isReply,
  commentScore,
  setCommentScore,
}) => {
  const [replyScoreState, setReplyScore] = useState(replyScore);
  const [userReply, setUserReply] = useState(false);
  const [replyText, setReplyText] = useState([]);
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
    <>
      <div className={`${isReply ? "ml-4 mt-4" : ""} bg-white p-4 rounded-md`}>
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
            <span className="text-[#5358b6]">
              {isReply ? `@${reply.replyingTo} ` : ""}
            </span>
            {isReply ? reply.content : comment.content}
          </p>
          <div className="flex items-center  justify-between pt-5">
            <span className="flex p-3 bg-purple-100 rounded-lg gap-2 items-center">
              <button onClick={addOneHandler}>+</button>
              <p className="font-bold">
                {isReply ? replyScoreState : commentScore}
              </p>
              <button onClick={subtractOneHandler}>-</button>
            </span>
            <button
              onClick={() => setUserReply(!userReply)}
              className=" flex items-center  text- gap-4 font-bold text-[#5358b6]"
            >
              {/* change to svg in Future */}
              <img src="./icon-reply.svg" alt="" className="w-4 h-4" /> Reply
            </button>
          </div>
        </div>
      </div>
      {replyText && (
        <UserReply
          userReply={userReply}
          isReply={true}
          replyText={replyText}
          addOneHandler={addOneHandler}
          subtractOneHandler={subtractOneHandler}
          setUserReply={setUserReply}
          setReplyText={setReplyText}
          reply={reply}
          comment={comment}
        />
      )}

      {userReply && (
        <ReplyIput
          setReplyText={setReplyText}
          isReply={isReply}
          setUserReply={setUserReply}
          reply={reply}
          comment={comment}
        />
      )}
    </>
  );
};
