import styled from "styled-components";

interface Props {
  StyledOuter: {
    sidePanelOpen: boolean;
  };
}

export const StyledOuter = styled.div<Props["StyledOuter"]>`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  height: calc(100% - 50px);
  margin-top: 50px;
  padding: 25px;
  overflow: auto;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  left: ${({ sidePanelOpen }) => (!sidePanelOpen ? "0" : "360px")};
  width: ${({ sidePanelOpen }) =>
    !sidePanelOpen ? "100%" : "calc(100% - 360px)"};
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;
