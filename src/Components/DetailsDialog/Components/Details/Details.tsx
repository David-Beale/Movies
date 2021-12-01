import { EntityId } from "@reduxjs/toolkit";
import { useState, useEffect, useMemo } from "react";
import moment from "moment";
import { selectMovieById } from "../../../../redux/movies";
import { useAppSelector } from "../../../../redux/hooks";
import CloseButton from "./Components/CloseButton";
import {
  DetailsContainer,
  Heading,
  Image,
  Published,
  RightContainer,
  Title,
} from "./DetailsStyle";

interface IProps {
  movieId: EntityId;
}
export default function Details({ movieId }: IProps) {
  const movie = useAppSelector((state) => selectMovieById(state, movieId));

  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const onResize = () => {
      const maxHeight = window.innerHeight - 50;
      const maxWidth = window.innerWidth - 50;
      const ratio = maxWidth / maxHeight;
      if (ratio < 1.34) {
        setDimensions({ height: (maxWidth * 3) / 4, width: maxWidth });
      } else {
        setDimensions({ height: maxHeight, width: (maxHeight * 4) / 3 });
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <DetailsContainer dimensions={dimensions}>
      {/* {movie && (
        <>
          <Image
            src={`${movie.thumbnail?.path}/portrait_uncanny.jpg`}
            alt={`${movie.title} image`}
          />

          <RightContainer>
            <Title>{movie.title}</Title>
            <Heading>Published:</Heading>
            <Published>{date}</Published>
            <Heading>Writer{writers && writers.length > 1 && "s"}:</Heading>
            <Published>{writers && writers.join(", ")}</Published>
            <Heading>Price:</Heading>
            <Published>${price}</Published>
          </RightContainer>
        </>
      )} */}

      <CloseButton />
    </DetailsContainer>
  );
}
