import styled from "styled-components";

export const Image = styled.img`
  min-height: 169px;
  min-width: 300px;
  max-height: 169px;
  max-width: 300px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const SkeletonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
`;
