import { EntityId } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { MovieApi } from "../../../../../../Api/MovieApi";

interface IProps {
  movieId: EntityId;
}
export const useCast = ({ movieId }: IProps) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await MovieApi.fetchCast(movieId);
      if (!result?.body?.cast) return;
      const cast = result.body.cast
        .slice(0, 9)
        .map((p: { name: string }) => p.name);
      setCast(cast);
    })();
  }, [movieId]);
  return cast;
};
