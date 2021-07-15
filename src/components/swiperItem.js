import React from "react";
import ReactDOM from "react-dom";
const c = React.createElement;
export default function swiperItem({ current, imgList }) {
  const getItemList = () => {
    let newArr = [];
    for (let i = 0; i < imgList.length; i++) {
      newArr = [
        ...newArr,
        c("li", { className: "itemBox" }, c("img", { src: imgList[i] })),
      ];
    }
    return newArr;
  };
  return c(
    "ul",
    { style: { marginLeft: `-${current * 448}px` } },
    ...getItemList()
  );
}
