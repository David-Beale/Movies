import styled from "styled-components";

interface Props {
  DetailsContainer: {
    dimensions: { height: number; width: number };
  };
}

export const DetailsContainer = styled.div<Props["DetailsContainer"]>`
  height: ${({ dimensions }) => dimensions.height}px;
  width: ${({ dimensions }) => dimensions.width}px;
  padding: 25px;
  padding-right: 0;
  display: flex;
  background-color: transparent;
  align-items: center;
  @media only screen and (max-width: 700px) {
    overflow: auto;
    flex-direction: column;
    height: calc(100vh - 15px);
    width: calc(100vw - 15px);
    padding-right: 25px;
  }
`;

export const Image = styled.img`
  width: calc(50% - 12.5px);
`;

export const RightContainer = styled.div`
  height: 100%;
  width: calc(50% + 12.5px);
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  overflow: auto;
  @media only screen and (max-width: 700px) {
    overflow: unset;
    width: 100%;
    padding: 25px;
  }
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`;
export const Heading = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: white;
`;
export const Published = styled.div`
  color: white;
`;
