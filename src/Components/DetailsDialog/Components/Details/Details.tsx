import { EntityId } from "@reduxjs/toolkit";
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
} from "./DetailsStyle";
import RatingComponent from "./Components/Rating/Rating";
import Genres from "./Components/Genres/Genres";
import { useDimensions } from "./hooks/useDimensions";
import Cast from "./Components/Cast/Cast";

interface IProps {
  movieId: EntityId;
}
export default function Details({ movieId }: IProps) {
  const movie = useAppSelector((state) => selectMovieById(state, movieId));

  const dimensions = useDimensions();

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

            <RatingComponent rating={movie.vote_average / 2} />
            <Cast movieId={movieId} />
            <Genres genres={movie.genre_ids} />
          </RightContainer>
        </>
      )}

      <CloseButton />
    </DetailsContainer>
  );
}
