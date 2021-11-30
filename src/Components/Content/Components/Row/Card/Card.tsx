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

  const onClick = () => {
    if (!comic) return;
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
    <CardContainer top={style.top} left={style.left} ref={tiltRef}>
      {comic.thumbnail && comic.thumbnail.path && (
        <Image
          src={`${comic.thumbnail.path}/portrait_uncanny.jpg`}
          alt={`${comic.title} image`}
        />
      )}
      <Title>{comic.title}</Title>
      <Button onClick={onClick} favourite={favourite}></Button>
    </CardContainer>
  );
}
