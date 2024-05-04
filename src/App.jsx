import { useState } from "react";
import RandomStars from "./RandomStar";
import "./App.css";

export default function App() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="container">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="main-star"
        ></div>
      </div>
      <RandomStars hover={hover} />
    </>
  );
}
