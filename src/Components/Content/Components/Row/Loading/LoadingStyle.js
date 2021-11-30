import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingContainer = styled.div.attrs((props) => ({
  style: {
    left: `${props.left}px`,
    top: `${props.top}px`,
  },
}))`
  position: absolute;
  width: 100%;
  height: 590px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Progress = styled(CircularProgress)`
  color: #ec1d24 !important;
`;
