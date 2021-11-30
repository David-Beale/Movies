import { useRef } from "react";
import { EntityId } from "@reduxjs/toolkit";
import {
  removeFavourite,
  selectFavouriteById,
} from "../../../../../redux/favourites";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { Title } from "../../../../Content/Components/Row/Card/CardStyle";
import { FavouriteContainer, RemoveButton } from "./FavouriteStyle";
import { setDetailsId } from "../../../../../redux/details";

interface IProps {
  favouriteId: EntityId;
}

export default function Favourite({ favouriteId }: IProps) {
  const titleRef = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();
  const favourite = useAppSelector((state) =>
    selectFavouriteById(state, favouriteId)
  );
  const onRemove = () => {
    dispatch(removeFavourite(favouriteId));
  };

  const onTitleClick = () => {
    if (!favouriteId || !titleRef.current) return;
    const rect = titleRef.current.getBoundingClientRect();
    const midHorizontal = rect.left + rect.width / 2;
    const midVertical = rect.top + rect.height / 2;

    dispatch(
      setDetailsId({
        id: favouriteId,
        position: `${midHorizontal}px ${midVertical}px`,
      })
    );
  };
  if (!favourite) return null;

  return (
    <FavouriteContainer>
      <Title onClick={onTitleClick} ref={titleRef}>
        {favourite.title}
      </Title>
      <RemoveButton onClick={onRemove} />
    </FavouriteContainer>
  );
}
