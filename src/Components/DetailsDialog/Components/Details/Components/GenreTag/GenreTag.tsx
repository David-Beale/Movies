import { selectGenreById } from "../../../../../../redux/genres";
import { useAppSelector } from "../../../../../../redux/hooks";
import { StyledGenreTag } from "./GenreStyle";

interface IProps {
  genreId: number;
}

export default function GenreTag({ genreId }: IProps) {
  const genre = useAppSelector((state) => selectGenreById(state, genreId));
  if (!genre) return null;
  return <StyledGenreTag>{genre.name}</StyledGenreTag>;
}
