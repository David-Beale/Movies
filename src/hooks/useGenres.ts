import { useEffect } from "react";
import { fetchGenres } from "../redux/genres";
import { useAppDispatch } from "../redux/hooks";

export const useGenres = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);
};
