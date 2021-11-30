import { useMemo } from "react";

interface IProps {
  sidePanelOpen: boolean;
  hasNextPage: boolean;
  length: number;
  resize: any[];
}
interface Dimensions {
  itemCount: number;
  width: number;
  height: number;
  colCount: number;
  colWidth: number;
  rowCount: number;
}
export const useDimensions = ({
  sidePanelOpen,
  hasNextPage,
  length,
  resize,
}: IProps) => {
  const dimensions = useMemo((): Dimensions => {
    const colWidth = window.innerWidth > 480 ? 350 : 300;
    const xPadding = window.innerWidth > 480 ? 50 : 10;
    const yPadding = 50;
    const yMargin = 50;

    const sidePanelAdj = sidePanelOpen ? -350 : 0;
    const width = window.innerWidth - xPadding + sidePanelAdj;
    const height = window.innerHeight - yPadding - yMargin;
    const colCount = Math.max(Math.floor(width / colWidth), 1);

    const itemCount = hasNextPage ? length + colCount : length;

    const rowCount = Math.ceil(itemCount / colCount);
    return { itemCount, width, height, colCount, colWidth, rowCount };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidePanelOpen, hasNextPage, length, resize]);

  return dimensions;
};
