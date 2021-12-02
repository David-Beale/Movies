import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  button: {
    open: boolean;
  };
}

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  box-shadow: 0px 13px 20px ${({ theme }) => theme.primaryShadow};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: #ecf0f3;
`;

export const Button = styled(StarIcon).attrs(() => ({
  fontSize: "large",
}))<Props["button"]>`
  color: ${({ theme }) => theme.primary};
  position: absolute;
  top: 14px;
  left: 10px;
  width: 36px;
  height: 36px;
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  transform: rotate(${({ open }) => (open ? 360 : 0)}deg);
  transition: all 0.75s !important;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
`;
