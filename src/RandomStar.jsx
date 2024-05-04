import { useState, useEffect } from "react";
import Stars from "./Star.jsx";
function RandomStars({ hover }) {
  let [star, setStars] = useState(0);

  useEffect(() => {
    generateStar();
  }, [hover]);

  function generateStar() {
    let random = Math.floor((Math.random() + 10) * 2);
    setStars(random);
  }
  console.log(hover);
  return <>{hover ? <Stars star={star} /> : null}</>;
}
export default RandomStars;
