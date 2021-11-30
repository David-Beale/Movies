import { useCallback } from "react";
import { fetchComics } from "../../../redux/comics";
import { useAppDispatch } from "../../../redux/hooks";

interface IProps {
  colCount: any;
  length: number;
  hasNextPage: boolean;
}
interface renderProps {
  visibleColumnStartIndex: number;
  visibleColumnStopIndex: number;
  visibleRowStartIndex: number;
  visibleRowStopIndex: number;
}
export const useVirtualiser = ({ colCount, length, hasNextPage }: IProps) => {
  const dispatch = useAppDispatch();

  const loadMoreItems = useCallback(() => {
    dispatch(fetchComics());
  }, [dispatch]);

  const isItemLoaded = useCallback(
    (index) => !hasNextPage || index < length,
    [hasNextPage, length]
  );
  const customOnItemsRendered = useCallback(
    (infiniteOnItemsRendered) =>
      ({
        visibleColumnStartIndex,
        visibleColumnStopIndex,
        visibleRowStartIndex,
        visibleRowStopIndex,
      }: renderProps) => {
        const visibleStartIndex =
          visibleRowStartIndex * colCount + visibleColumnStartIndex;
        const visibleStopIndex =
          visibleRowStopIndex * colCount + visibleColumnStopIndex;
        infiniteOnItemsRendered({
          visibleStartIndex,
          visibleStopIndex,
        });
      },
    [colCount]
  );

  return { loadMoreItems, isItemLoaded, customOnItemsRendered };
};
