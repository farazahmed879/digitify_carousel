import { useState } from "react";
import "./style.css";
const CustomImg = ({
  src,
  height,
  width,
  handleClick = console.log("click"),
  isZoom = false,
}) => {
  return (
    <div className="img-container" onClick={handleClick}>
      <img
        className={isZoom && "zoom"}
        src={src}
        height={height}
        width={width}
      />
    </div>
  );
};
export default CustomImg;
