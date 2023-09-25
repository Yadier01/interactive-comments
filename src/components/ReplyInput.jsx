import { currentUser as data } from "../../data.json";
export const ReplyIput = () => {
  return (
    <div className="p-4 mt-4 rounded-md w-full flex items-center bg-white  flex-col">
      <form className="">
        <textarea
          name=""
          id=""
          cols="30"
          rows="3"
          className="border-2 rounded-md "
          placeholder="   Add a comment..."
        ></textarea>
        <div className="flex items-center mt-4 justify-between">
          <img src={data.image.png} alt="" className="w-9" />
          <button className="py-3 px-7 rounded-md bg-[#5358b5] text-white">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};
