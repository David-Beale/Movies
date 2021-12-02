import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  Title: {
    ref: any;
  };
}

export const FavouriteContainer = styled.li`
  padding: 15px 50px 15px 15px;
  border-bottom: 1px solid rgb(204, 204, 204);
  position: relative;
  width: 100%;
`;

export const Title = styled.div<Props["Title"]>`
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 18px;
  padding: 10px;
  overflow: hidden;
  user-select: none;
`;

export const RemoveButton = styled(CloseIcon).attrs(() => ({
  fontSize: "large",
}))`
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;
