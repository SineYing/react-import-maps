import React from "react";
import ReactDOM from "react-dom";
const c = React.createElement;
export default function dot({ current, imgList }) {
  const getItemList = () => {
    let newArr = [];
    for (let i = 0; i < imgList.length; i++) {
      newArr = [
        ...newArr,
        c("li", {
          className: "itemDot",
          style: { backgroundColor: `${current == i ? "#FF9300" : "#0096FF"}` },
        }),
      ];
    }
    return newArr;
  };
  return c("ul", {className: "itemDotBox",}, ...getItemList());
}
