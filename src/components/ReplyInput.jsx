import { useState } from "react";
import { currentUser as data } from "../../data.json";

export const ReplyIput = ({
  setReplyText,
  setUserReply,
  isReply,
  reply,
  comment,
}) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    setReplyText((prevText) => [...prevText, text]);
    setUserReply((prev) => !prev);
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };
  const userTag = isReply
    ? `@${reply.user.username} `
    : `@${comment.user.username}  `;

  return (
    <div
      className={` ${
        isReply ? "ml-4 mt-4" : "w-full"
      } p-4 mt-4 rounded-md  flex   bg-white  flex-col`}
    >
      <form onSubmit={handleSubmit} className="">
        <textarea
          cols="30"
          rows="3"
          className="border-2 w-full resize-none rounded-md "
          placeholder="   Add a comment..."
          onChange={handleInput}
          defaultValue={userTag}
        ></textarea>
        <div className="flex items-center mt-4 justify-between">
          <img src={data.image.png} alt="" className="w-9" />
          <button
            type="submit"
            className="py-3 px-7 rounded-md bg-[#5358b5] text-white"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};
