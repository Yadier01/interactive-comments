import { currentUser as data } from "../../data.json";
import { useState } from "react";

export const UserReply = ({
  userReply,
  isReply,
  setUserReply,
  replyText,
  setReplyText,
}) => {
  const [userScore, setUserScore] = useState(0);

  const addOneHandler = () => {
    setUserScore((prev) => prev + 1);
  };

  const subtractOneHandler = () => {
    setUserScore((prev) => prev - 1);
  };
  const handleDelete = (index) => {
    const updatedReplyText = [...replyText];
    updatedReplyText.splice(index, 1);
    setReplyText(updatedReplyText);
  };

  return (
    <div className={`${isReply ? "border-l-2 border-gray-400/40" : ""} w-full`}>
      {replyText.map((item, index) => (
        <div key={index} className={`w-full`}>
          <div
            className={`${isReply ? "ml-4 mt-4 " : ""} bg-white p-4 rounded-md`}
          >
            <span className="flex items-center gap-4">
              <img src={data.image.png} className="w-9" alt="" />
              <p className="font-bold">{data.username}</p>
              <p>created at {}</p>
            </span>
            <div>
              <p>{item}</p>
              <div className="flex items-center justify-between pt-5">
                <span className="flex p-3 bg-purple-100 rounded-lg gap-2 items-center">
                  <button onClick={addOneHandler}>+</button>
                  <p className="font-bold">{userScore}</p>
                  <button onClick={subtractOneHandler}>-</button>
                </span>
                <div className="flex gap-8">
                  <button
                    className="text-red-700 font-bold"
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </button>
                  <button
                    className="text-[#5358b6] font-bold"
                    onClick={() => setUserReply(!userReply)}
                  >
                    reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
