import { Heading, TagContainer } from "../../DetailsStyle";
import GenreTag from "./GenreTag/GenreTag";

interface Iprops {
  genres: number[];
}

export default function Genres({ genres }: Iprops) {
  return (
    <>
      <Heading>Genres</Heading>
      <TagContainer>
        {genres.map((genreId) => (
          <GenreTag key={genreId} genreId={genreId} />
        ))}
      </TagContainer>
    </>
  );
}
