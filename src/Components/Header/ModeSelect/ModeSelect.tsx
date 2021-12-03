import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Mode, selectNewMode } from "../../../redux/movies";
import {
  MenuItem,
  PopoverContents,
  SelectContainer,
  StyledDownArrow,
  StyledPopover,
  StyledUpArrow,
} from "./ModeSelectStyle";

export default function ModeSelect() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(({ movies }) => movies.mode);
  const [open, setOpen] = useState(false);
  const anchor = useRef<HTMLElement>(null);

  const onClick = (e: any) => {
    const newMode: number = +Mode[e.target.innerHTML];
    dispatch(selectNewMode(newMode));
    setOpen(false);
  };
  if (mode === Mode.Search) return null;
  return (
    <>
      <SelectContainer onClick={() => setOpen(true)} ref={anchor}>
        {Mode[mode]}
        {open ? <StyledUpArrow /> : <StyledDownArrow />}
      </SelectContainer>
      <StyledPopover
        open={open}
        anchorEl={anchor.current}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <PopoverContents>
          <MenuItem onClick={onClick}>Popular</MenuItem>
          <MenuItem onClick={onClick}>Now Playing</MenuItem>
          <MenuItem onClick={onClick}>Top Rated</MenuItem>
          <MenuItem onClick={onClick}>Upcoming</MenuItem>
        </PopoverContents>
      </StyledPopover>
    </>
  );
}
