import { EntityId } from "@reduxjs/toolkit";
import { Heading, TagContainer } from "../../DetailsStyle";
import CastTag from "./CastTag/CastTag";
import { useCast } from "./useCast";

interface IProps {
  movieId: EntityId;
}
export default function Cast({ movieId }: IProps) {
  const cast = useCast({ movieId });
  return (
    <>
      <Heading>Cast</Heading>
      <TagContainer>
        {cast.map((person) => (
          <CastTag key={person} person={person} />
        ))}
      </TagContainer>
    </>
  );
}
