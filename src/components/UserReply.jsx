import { currentUser as data } from "../../data.json";
import { useState } from "react";

export const UserReply = ({ isReply, replyText, setReplyText }) => {
  const [userScore, setUserScore] = useState(0);
  const [editedText, setEditedText] = useState("");
  const [edit, setEdit] = useState(false);

  const addOneHandler = () => {
    setUserScore((prev) => prev + 1);
  };

  const subtractOneHandler = () => {
    setUserScore((prev) => prev - 1);
  };

  const handleEdit = (index) => {
    setEdit(true);
    setEditedText(replyText[index]);
  };

  const handleSave = (index) => {
    const updatedReplyText = [...replyText];
    updatedReplyText[index] = editedText;
    setReplyText(updatedReplyText);
    setEdit(false);
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
              {/* TODO: add time when user create comment */}
              <p>created at {}</p>
            </span>
            <div>
              {edit ? (
                <textarea
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  cols="30"
                  rows="3"
                  className="border-2 w-full resize-none rounded-md "
                />
              ) : (
                <p>{item}</p>
              )}

              <div className="flex items-center justify-between pt-5">
                <span className="flex p-3 bg-purple-100 rounded-lg gap-2 items-center">
                  <button onClick={addOneHandler}>+</button>
                  <p className="font-bold">{userScore}</p>
                  <button onClick={subtractOneHandler}>-</button>
                </span>

                {/* TODO: Make a custom component */}
                <div className="flex gap-8">
                  {edit ? (
                    <button
                      className="text-[#5358b6] flex items-center gap-4 font-bold"
                      onClick={() => handleSave(index)}
                    >
                      <img src="./icon-save.svg" alt="" className="w-4 h-4" />
                      Save
                    </button>
                  ) : (
                    <button
                      className="text-red-700 flex items-center gap-4 font-bold"
                      onClick={() => handleDelete(index)}
                    >
                      <img src="./icon-delete.svg" alt="" className="w-4 h-4" />
                      Delete
                    </button>
                  )}

                  {edit ? (
                    <button
                      className=" flex items-center gap-4 text-[#5358b6] font-bold"
                      onClick={() => setEdit(!edit)}
                    >
                      <img src="./icon-reply.svg" alt="" />
                      Cancel
                    </button>
                  ) : (
                    <button
                      className=" flex items-center gap-4 text-[#5358b6] font-bold"
                      onClick={() => handleEdit(index)}
                    >
                      <img src="./icon-reply.svg" alt="" />
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
