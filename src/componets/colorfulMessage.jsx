import React from "react";

export const ColorfulMessage = (props) => {
  // console.log("からフル");
  const { color, children } = props; // 分割代入
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
