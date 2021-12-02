import styled from "styled-components";

interface Props {
  DetailsContainer: {
    dimensions: { height: number; width: number };
  };
}

export const DetailsContainer = styled.div<Props["DetailsContainer"]>`
  position: relative;
  height: ${({ dimensions }) => dimensions.height}px;
  width: ${({ dimensions }) => dimensions.width}px;
  display: flex;
  background-color: transparent;
  align-items: center;
  @media only screen and (max-width: 700px) {
    overflow: auto;
    flex-direction: column;
    height: calc(100vh - 15px);
    width: calc(100vw - 15px);
    padding-top: 25px;
  }
`;

export const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 25px 50px;
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
export const Content = styled.div`
  color: white;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledTag = styled.div`
  background-color: steelblue;
  border-radius: 10px;
  margin: 5px;
  padding: 5px 10px;
  color: white;
`;
