import { EntityId } from "@reduxjs/toolkit";
import { ComponentType, memo } from "react";
import { areEqual, GridChildComponentProps } from "react-window";
import Card from "./Card/Card";
import Loading from "./Loading/Loading";

interface IProps {
  data: {
    items: EntityId[];
    columns: number;
  };
  rowIndex: number;
  columnIndex: number;
  style: {
    top: number;
    left: number;
  };
}

export default memo(function ({ data, rowIndex, columnIndex, style }: IProps) {
  const { items, columns } = data;
  const comicId = items[rowIndex * columns + columnIndex];
  if (!comicId) {
    if (columnIndex === 0) {
      return <Loading style={style} />;
    }
    return null;
  }
  return <Card key={comicId} comicId={comicId} style={style} />;
}, areEqual) as ComponentType<GridChildComponentProps>;
