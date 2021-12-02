import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const Button = styled(CloseIcon).attrs(() => ({
  fontSize: "large",
}))`
  cursor: pointer;
  color: white;
  position: absolute;
  top: 12px;
  right: 20px;
`;
