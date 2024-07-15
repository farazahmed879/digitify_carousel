import React, { useState } from "react";
import "./style.css";
import CustomScreen from "../custom-screen";
import ResultScreen from "../ResultScreen";
const CustomCarousel = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [result, setResult] = useState([]);

  const scrollToItem = (index) => {
    setCurrentIndex(index);
  };

  const handleChange = (question = {}, emoji = {}) => {
    scrollToItem(currentIndex + 1);
    if (result.some((i) => i.id == question.id))
      setResult((prevItems) =>
        prevItems.map((item) =>
          item.id === question.id
            ? { ...item, emojiId: emoji.id, img: emoji?.img }
            : item
        )
      );
    else
      setResult((prev) => [
        ...prev,
        { ...question, emojiId: emoji.id, img: emoji?.img },
      ]);
  };

  const data = {
    question1: { id: 1, question: "How is you week overall?" },
    question2: { id: 2, question: "How do you feel today?" },
    question3: { id: 3, question: "How is your health today?" },
    question4: { id: 4, question: "You have to travel today" },
  };

  const First = () => {
    return <CustomScreen data={data.question1} handleChange={handleChange} />;
  };
  const Second = () => {
    return <CustomScreen data={data.question2} handleChange={handleChange} />;
  };

  const Third = () => {
    return <CustomScreen data={data.question3} handleChange={handleChange} />;
  };

  const Fourth = () => {
    return <CustomScreen data={data.question4} handleChange={handleChange} />;
  };

  return (
    <>
      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => scrollToItem(item?.id)}
          >
            <div className={item.id == currentIndex ? "icon1" : "icon2"}></div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: 'relative',
          width: "100%",
          height: "100vh" /* Full viewport height */,
          overflow: 'hidden',
        }}
      >
        {currentIndex == 1 ? (
          <First />
        ) : currentIndex == 2 ? (
          <Second />
        ) : currentIndex == 3 ? (
          <Third />
        ) : currentIndex == 4 ? (
          <Fourth />
        ) : (
          <ResultScreen data={result} />
        )}
      </div>
    </>
  );
};
export default CustomCarousel;
