import { EntityId } from "@reduxjs/toolkit";
import { selectComicById } from "../../../redux/comics";
import { useAppSelector } from "../../../redux/hooks";
import { DetailsContainer } from "./DetailsStyle";

interface IProps {
  comicId: EntityId;
}
export default function Details({ comicId }: IProps) {
  const comic = useAppSelector((state) => selectComicById(state, comicId));

  return <DetailsContainer></DetailsContainer>;
}
