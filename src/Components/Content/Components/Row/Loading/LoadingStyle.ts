import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  LoadingContainer: {
    left: number;
    top: number;
  };
}

export const LoadingContainer = styled.div.attrs<Props["LoadingContainer"]>(
  (props) => ({
    style: {
      left: `${props.left}px`,
      top: `${props.top}px`,
    },
  })
)<Props["LoadingContainer"]>`
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
