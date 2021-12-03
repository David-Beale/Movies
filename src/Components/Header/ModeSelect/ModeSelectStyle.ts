import { Popover } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import styled from "styled-components";

interface IProps {
  SelectContainer: {
    ref: any;
  };
}

export const SelectContainer = styled.div<IProps["SelectContainer"]>`
  position: absolute;
  right: 32px;
  width: 140px;
  height: 40px;
  border-radius: 15px;
  box-shadow: 8px 8px 8px ${({ theme }) => theme.topShadow},
    -8px -8px 8px ${({ theme }) => theme.bottomShadow};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

export const PopoverContents = styled.div`
  width: 140px;
  background-color: rgb(236, 240, 243);
`;

export const StyledPopover = styled(Popover).attrs((props) => ({
  PaperProps: {
    style: {
      boxShadow: `8px 8px 8px ${props.theme.topShadow}`,
    },
  },
}))``;

export const MenuItem = styled.div`
  color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  user-select: none;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  &:hover {
    background-color: ${({ theme }) => theme.primaryShadow};
  }
`;

export const StyledDownArrow = styled(ArrowDropDownIcon)`
  position: absolute;
  right: 5px;
`;
export const StyledUpArrow = styled(ArrowDropUpIcon)`
  position: absolute;
  right: 5px;
`;
