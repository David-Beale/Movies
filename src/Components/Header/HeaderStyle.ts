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

export const FavButtonContainer = styled.div`
  position: absolute;
  left: 32px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 8px 8px 8px ${({ theme }) => theme.topShadow},
    -8px -8px 8px ${({ theme }) => theme.bottomShadow};
  -webkit-tap-highlight-color: transparent;
  @media (max-width: 500px) {
    left: 4px;
  }
`;

export const FavButton = styled(StarIcon).attrs(() => ({
  style: { fontSize: 45 },
}))<Props["button"]>`
  color: ${({ theme }) => theme.primary};
  padding: 10px;
  transform: rotate(${({ open }) => (open ? 360 : 0)}deg);
  transition: all 0.75s !important;
`;
