import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Rating = ({ rating = 5 }) => {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  const mouseClickHandler = (currentIndex) => {
    setRate(currentIndex);
  };

  const mouseEnterHandler = (currentIndex) => {
    setHover(currentIndex);
  };

  const mouseLeaveHandler = () => {
    setHover(rate);
  };

  return (
    <div className="p-5 flex justify-center">
      {[...Array(rating)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={
              index <= (hover || rate) ? "text-yellow-400" : "text-slate-400"
            }
            key={index}
            onClick={() => mouseClickHandler(index)}
            onMouseEnter={() => mouseEnterHandler(index)}
            onMouseLeave={mouseLeaveHandler}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Rating;
