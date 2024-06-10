import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

const Rating = ({ stars }) => {
  const starsMap = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="icon" />
        ) : stars >= number ? (
          <BiSolidStarHalf className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return <p className="wrapper">{starsMap}</p>;
};

export default Rating;
