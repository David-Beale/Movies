import { selectGenreById } from "../../../../../../../redux/genres";
import { useAppSelector } from "../../../../../../../redux/hooks";
import { StyledTag } from "../../../DetailsStyle";

interface IProps {
  genreId: number;
}

export default function GenreTag({ genreId }: IProps) {
  const genre = useAppSelector((state) => selectGenreById(state, genreId));
  if (!genre) return null;
  return <StyledTag>{genre.name}</StyledTag>;
}
