import styled from "styled-components";

interface Props {
  f: {
    open: boolean;
  };
}

export const FavouritesPanelContainer = styled.div<Props["f"]>`
  position: fixed;
  z-index: 4;
  top: 64px;
  left: 0;
  width: 360px;
  transform: translateX(${({ open }) => (open ? 0 : "-100%")});
  height: calc(100% - 64px);
  background: #ecf0f3;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100vw;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  border-right: 1px solid rgb(204, 204, 204);
  box-shadow: 13px 0px 20px ${({ theme }) => theme.primaryShadow};
`;
