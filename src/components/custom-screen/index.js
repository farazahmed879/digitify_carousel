import CustomImg from "../custom-Img";
import sadImg from "../../images/sad.jpg";
import confusedImg from "../../images/confused.jpg";
import happyImg from "../../images/happy.png";
import { useEffect, useState } from "react";

const CustomScreen = ({ data = {}, handleChange }) => {
  const [className, setClassName] = useState("grid-container");
  const Emojis = [
    { id: 1, img: sadImg },
    { id: 2, img: confusedImg },
    { id: 3, img: happyImg },
  ];

  // useEffect(() => {
  //   setClassName("grid-container2");
  // }, [data]);

  return (
    <div class={"grid-container"}>
      <div class="grid-item">{data?.question}</div>
      <div class="grid-item2">
        {Emojis.map((item) => (
          <CustomImg
            src={item.img}
            height="100px"
            width="100px"
            handleClick={() => handleChange(data, item)}
            isZoom={true}
          />
        ))}
      </div>
    </div>
  );
};
export default CustomScreen;
