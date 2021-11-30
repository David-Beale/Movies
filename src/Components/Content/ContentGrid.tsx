import { FixedSizeGrid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import { useAppSelector } from "../../redux/hooks";
import { selectComicsIds } from "../../redux/comics";
import OuterElement from "./Components/OuterElement/OuterElement";
import InnerElement from "./Components/Inner/InnerElement";
import Row from "./Components/Row/Row";
import { useDimensions } from "./Hooks/useDimensions";
import { useResize } from "./Hooks/useResize";
import { useVirtualiser } from "./Hooks/useVirtualiser";

const ROW_HEIGHT = 590;

export default function ContentGrid() {
  const comicIds = useAppSelector(selectComicsIds);

  const sidePanelOpen = useAppSelector(({ favourites }) => favourites.open);
  const hasNextPage = useAppSelector(({ comics }) => !comics.finished);

  const resize = useResize();

  const dimensions = useDimensions({
    sidePanelOpen,
    hasNextPage,
    length: comicIds.length,
    resize,
  });

  const { loadMoreItems, isItemLoaded, customOnItemsRendered } = useVirtualiser(
    { colCount: dimensions.colCount, length: comicIds.length, hasNextPage }
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
            items: comicIds,
            columns: dimensions.colCount,
          }}
        >
          {Row}
        </FixedSizeGrid>
      )}
    </InfiniteLoader>
  );
}
