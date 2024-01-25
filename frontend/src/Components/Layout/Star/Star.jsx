import React from "react";
import { IoIosStar } from "react-icons/io"
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import "./Star.scss"

const Star = ({ star }) => {
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {star >= index + 1 ? (
          <IoIosStar className="icon" />
        ) : star >= number ? (
          <IoIosStarHalf className="icon" />
        ) : (
          <IoIosStarOutline className="icon" />
        )}
      </span>
    );
  });
  return (
    ratingStar
  );
};

export default Star;
