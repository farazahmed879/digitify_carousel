import React from "react";
import CustomCarousel from "../custom-carousel";
const HomeComponent = () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <>
      <CustomCarousel items={items} />
    </>
  );
};
export default HomeComponent;
