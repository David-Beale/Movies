import styled from "styled-components";
import remove from "../../../../../../Assets/images/removeWhite.svg";

export const Button = styled.button`
  position: absolute;
  top: 32px;
  right: 20px;
  width: 32px;
  height: 32px;
  margin-top: -16px;
  background: url(${remove}) 50% 50% no-repeat;
  background-size: 75%;
  border: 0;
`;
