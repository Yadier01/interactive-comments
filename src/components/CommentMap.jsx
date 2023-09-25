import { comments as data } from "../../data.json";
import { Comments } from "./Comments";
export const CommentMap = () => {
  return (
    <>
      {data.map((comment) => (
        <Comments key={comment.id} comment={comment} />
      ))}
    </>
  );
};
