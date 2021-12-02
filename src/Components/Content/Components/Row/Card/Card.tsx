import { SyntheticEvent } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { selectMovieById } from "../../../../../redux/movies";
import {
  addFavourite,
  removeFavourite,
  selectFavouriteById,
} from "../../../../../redux/favourites";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { Button, CardContainer, Image, Title } from "./CardStyle";
import { useTilt } from "./useTilt";
import { setDetailsId } from "../../../../../redux/details";

interface IProps {
  movieId: EntityId;
  style: { top: number; left: number };
}

export default function Card({ movieId, style }: IProps) {
  const dispatch = useAppDispatch();

  const movie = useAppSelector((state) => selectMovieById(state, movieId));
  const favourite = useAppSelector((state) =>
    selectFavouriteById(state, movieId)
  );

  const tiltRef = useTilt();

  const onCardClick = () => {
    if (!movie || !tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const midHorizontal = rect.left + rect.width / 2;
    const midVertical = rect.top + rect.height / 2;

    dispatch(
      setDetailsId({
        id: movie.id,
        position: `${midHorizontal}px ${midVertical}px`,
      })
    );
  };

  const onFavouriteClick = (e: SyntheticEvent) => {
    if (!movie) return;
    e.stopPropagation();
    if (favourite) dispatch(removeFavourite(movieId));
    else {
      const payload = {
        id: movie.id,
        title: movie.title,
      };
      dispatch(addFavourite(payload));
    }
  };
  if (!movie) return null;
  return (
    <CardContainer
      ref={tiltRef}
      top={style.top}
      left={style.left}
      onClick={onCardClick}
    >
      <Image
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/${"w300"}/${movie.backdrop_path}`
            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
        }
        alt={`${movie.title} image`}
      />
      <Title>{movie.title}</Title>
      <Button onClick={onFavouriteClick} favourite={!!favourite}></Button>
    </CardContainer>
  );
}
