import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export const SearchBarContainer = styled.div`
  width: 650px;
  height: 50px;
  position: relative;
  transition: all 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (max-width: 1025px) {
    margin-left: 100px;
    margin-right: 195px;
  }
  @media (max-width: 500px) {
    margin-left: 60px;
    margin-right: ${({ active }) => (active ? 10 : 125)}px;
  }
`;

export const Input = styled.input`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  border: none;
  outline: none;
  padding: 10px 50px 5px 70px;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  box-shadow: inset 8px 8px 8px ${({ theme }) => theme.topShadow},
    inset -8px -8px 8px ${({ theme }) => theme.bottomShadow};
  font-weight: 700;
  font-size: 1rem;
  ::placeholder {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 500px) {
    padding: 10px 50px 5px 16px;
    ::placeholder {
      color: ${(props) => (props.active ? props.theme.primary : "transparent")};
    }
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.primary};
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 1;
`;
export const StyledCancelIcon = styled(ClearIcon)`
  color: ${({ theme }) => theme.primary};
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  z-index: 3;
`;
