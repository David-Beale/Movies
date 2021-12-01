import { FixedSizeGrid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import { useAppSelector } from "../../redux/hooks";
import { selectMovieIds } from "../../redux/movies";
import OuterElement from "./Components/OuterElement/OuterElement";
import InnerElement from "./Components/Inner/InnerElement";
import Row from "./Components/Row/Row";
import { useDimensions } from "./Hooks/useDimensions";
import { useResize } from "./Hooks/useResize";
import { useVirtualiser } from "./Hooks/useVirtualiser";

const ROW_HEIGHT = 350;

export default function ContentGrid() {
  const movieIds = useAppSelector(selectMovieIds);

  const sidePanelOpen = useAppSelector(({ favourites }) => favourites.open);
  const hasNextPage = useAppSelector(({ movies }) => !movies.finished);

  const resize = useResize();

  const dimensions = useDimensions({
    sidePanelOpen,
    hasNextPage,
    length: movieIds.length,
    resize,
  });

  const { loadMoreItems, isItemLoaded, customOnItemsRendered } = useVirtualiser(
    { colCount: dimensions.colCount, length: movieIds.length, hasNextPage }
  );

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={dimensions.itemCount}
      loadMoreItems={loadMoreItems}
      threshold={3}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeGrid
          ref={ref}
          height={dimensions.height}
          width={dimensions.width}
          columnCount={dimensions.colCount}
          columnWidth={dimensions.colWidth}
          rowCount={dimensions.rowCount}
          rowHeight={ROW_HEIGHT}
          onItemsRendered={customOnItemsRendered(onItemsRendered)}
          outerElementType={OuterElement}
          innerElementType={InnerElement}
          itemData={{
            items: movieIds,
            columns: dimensions.colCount,
          }}
        >
          {Row}
        </FixedSizeGrid>
      )}
    </InfiniteLoader>
  );
}
