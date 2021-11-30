import { EntityId } from "@reduxjs/toolkit";
import {
  removeFavourite,
  selectFavouriteById,
} from "../../../../../redux/favourites";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { Title } from "../../../../Content/Components/Row/Card/CardStyle";
import { FavouriteContainer, RemoveButton } from "./FavouriteStyle";

interface IProps {
  favouriteId: EntityId;
}

export default function Favourite({ favouriteId }: IProps) {
  const dispatch = useAppDispatch();
  const favourite = useAppSelector((state) =>
    selectFavouriteById(state, favouriteId)
  );
  const onClick = () => {
    dispatch(removeFavourite(favouriteId));
  };
  if (!favourite) return null;
  return (
    <FavouriteContainer>
      <Title>{favourite.title}</Title>
      <RemoveButton onClick={onClick} />
    </FavouriteContainer>
  );
}
