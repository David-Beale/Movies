import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export const SearchBarContainer = styled.div`
  width: 650px;
  height: 50px;
  position: relative;
  @media (max-width: 1100px) {
    margin-left: 230px;
    margin-right: 60px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  border: none;
  outline: none;
  padding: 10px 10px 5px 70px;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  box-shadow: inset 8px 8px 8px ${({ theme }) => theme.topShadow},
    inset -8px -8px 8px ${({ theme }) => theme.bottomShadow};
  font-weight: 700;
  font-size: 1rem;
  ::placeholder {
    color: ${({ theme }) => theme.primary};
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: ${({ theme }) => theme.primary};
  position: absolute;
  left: 10px;
  top: 10px;
`;
export const StyledCancelIcon = styled(ClearIcon)`
  color: ${({ theme }) => theme.primary};
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`;
