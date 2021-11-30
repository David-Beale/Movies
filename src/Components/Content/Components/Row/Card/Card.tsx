import { SyntheticEvent } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { selectComicById } from "../../../../../redux/comics";
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
  comicId: EntityId;
  style: { top: number; left: number };
}

export default function Card({ comicId, style }: IProps) {
  const dispatch = useAppDispatch();

  const comic = useAppSelector((state) => selectComicById(state, comicId));
  const favourite = useAppSelector((state) =>
    selectFavouriteById(state, comicId)
  );

  const tiltRef = useTilt();

  const onCardClick = () => {
    if (!comic || !tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const midHorizontal = rect.left + rect.width / 2;
    const midVertical = rect.top + rect.height / 2;

    dispatch(
      setDetailsId({
        id: comic.id,
        position: `${midHorizontal}px ${midVertical}px`,
      })
    );
  };

  const onFavouriteClick = (e: SyntheticEvent) => {
    if (!comic) return;
    e.stopPropagation();
    if (favourite) dispatch(removeFavourite(comicId));
    else {
      const payload = {
        id: comic.id,
        title: comic.title,
      };
      dispatch(addFavourite(payload));
    }
  };
  if (!comic) return null;
  return (
    <CardContainer
      top={style.top}
      left={style.left}
      ref={tiltRef}
      onClick={onCardClick}
    >
      {comic.thumbnail && comic.thumbnail.path && (
        <Image
          src={`${comic.thumbnail.path}/portrait_uncanny.jpg`}
          alt={`${comic.title} image`}
        />
      )}
      <Title>{comic.title}</Title>
      <Button onClick={onFavouriteClick} favourite={favourite}></Button>
    </CardContainer>
  );
}
