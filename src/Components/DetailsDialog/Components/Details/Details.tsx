import { EntityId } from "@reduxjs/toolkit";
import { useState, useEffect, useMemo } from "react";
import moment from "moment";
import { selectComicById } from "../../../../redux/comics";
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
  comicId: EntityId;
}
export default function Details({ comicId }: IProps) {
  const comic = useAppSelector((state) => selectComicById(state, comicId));

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

  const [date, writers, price] = useMemo(() => {
    if (!comic) return [];
    const dateObject = comic.dates.find((d) => d.type === "onsaleDate");
    if (!dateObject) return [];
    const date = moment(dateObject.date).format("MMMM Do YYYY");

    const price = comic.prices[0]?.price || "N/A";

    let writers = comic.creators.items
      .filter((p) => p.role === "writer")
      .map((p) => p.name);

    if (!writers.length) writers = ["N/A"];
    return [date, writers, price];
  }, [comic]);

  return (
    <DetailsContainer dimensions={dimensions}>
      {comic && (
        <>
          <Image
            src={`${comic.thumbnail?.path}/portrait_uncanny.jpg`}
            alt={`${comic.title} image`}
          />

          <RightContainer>
            <Title>{comic.title}</Title>
            <Heading>Published:</Heading>
            <Published>{date}</Published>
            <Heading>Writer{writers && writers.length > 1 && "s"}:</Heading>
            <Published>{writers && writers.join(", ")}</Published>
            <Heading>Price:</Heading>
            <Published>${price}</Published>
          </RightContainer>
        </>
      )}

      <CloseButton />
    </DetailsContainer>
  );
}
