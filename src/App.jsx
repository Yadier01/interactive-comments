import "./App.css";
import { CommentMap } from "./components/CommentMap";
import { ReplyIput } from "./components/ReplyInput";
function App() {
  return (
    <main className="flex justify-center items-center">
      <div className="max-w-xl">
        <CommentMap />
      </div>
    </main>
  );
}

export default App;
