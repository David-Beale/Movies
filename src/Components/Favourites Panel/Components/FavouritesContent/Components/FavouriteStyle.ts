import styled from "styled-components";
import remove from "../../../../../Assets/images/remove.svg";

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

export const RemoveButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  width: 32px;
  height: 32px;
  margin-top: -16px;
  background: url(${remove}) 50% 50% no-repeat;
  background-size: 50%;
  border: 0;
`;
