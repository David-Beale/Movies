import React, { forwardRef, SyntheticEvent } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { StyledOuter } from "./OuterStyles";

interface IProps {
  children: React.ReactNode;
  onScroll: (e: SyntheticEvent<HTMLDivElement>) => void;
}
const OuterElement = forwardRef(({ children, onScroll }: IProps, ref) => {
  const sidePanelOpen = useAppSelector(({ favourites }) => favourites.open);
  return (
    <StyledOuter onScroll={onScroll} sidePanelOpen={sidePanelOpen}>
      {children}
    </StyledOuter>
  );
});

export default OuterElement;
