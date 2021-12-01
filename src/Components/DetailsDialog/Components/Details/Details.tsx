import { EntityId } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import moment from "moment";
import { selectMovieById } from "../../../../redux/movies";
import { useAppSelector } from "../../../../redux/hooks";
import CloseButton from "./Components/CloseButton/CloseButton";
import {
  DetailsContainer,
  Heading,
  Image,
  Content,
  RightContainer,
  Title,
  GenreContainer,
} from "./DetailsStyle";
import GenreTag from "./Components/GenreTag/GenreTag";

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
      {movie && (
        <>
          <Image
            src={`https://image.tmdb.org/t/p/${"w780"}/${movie.poster_path}`}
            alt={`${movie.title} image`}
          />

          <RightContainer>
            <Title>{movie.title}</Title>
            <Heading>Released</Heading>
            <Content>
              {moment(movie.release_date).format("MMMM Do YYYY")}
            </Content>
            <Heading>Summary</Heading>
            <Content>{movie.overview}</Content>
            <Heading>Rating</Heading>
            <Content>{movie.vote_average}</Content>
            <GenreContainer>
              {movie.genre_ids.map((genreId) => (
                <GenreTag key={genreId} genreId={genreId} />
              ))}
            </GenreContainer>
          </RightContainer>
        </>
      )}

      <CloseButton />
    </DetailsContainer>
  );
}
