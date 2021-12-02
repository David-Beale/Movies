import { useState } from "react";
import { Rating } from "@mui/material";
import { Heading } from "../../DetailsStyle";
import { RatingContainer, RatingValue } from "./RatingStyle";

interface IProps {
  rating: number;
}
export default function RatingComponent({ rating }: IProps) {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => setHover(true);
  const onMouseExit = () => setHover(false);

  return (
    <>
      <Heading>Rating</Heading>
      <RatingContainer
        onPointerEnter={onMouseEnter}
        onPointerLeave={onMouseExit}
      >
        <Rating name="read-only" value={rating} readOnly precision={0.2} />
        {hover && <RatingValue>{rating} / 5</RatingValue>}
      </RatingContainer>
    </>
  );
}
