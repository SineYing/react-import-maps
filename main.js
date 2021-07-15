import React from "react";
import ReactDOM from "react-dom";
import SwiperItem from "./src/components/swiperItem.js";
import Dot from "./src/components/dot.js";
const c = React.createElement;
const imgList = [
  "src/imgs/3.jpeg",
  "src/imgs/4.jpeg",
  "src/imgs/a.jpeg",
  "src/imgs/b.jpeg",
];

function App() {
  const { useEffect, useState } = React;
  const [current, setCurrent] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let timer = setInterval(() => {
      const newC = current < imgList.length - 1 ? current + 1 : 0;
      setCurrent(newC);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return c(
    "div",
    { className: "box" },
    c(SwiperItem, { current, imgList }),
    c(Dot, { current, imgList })
  );
}
ReactDOM.render(c(App), document.getElementById("app"));
