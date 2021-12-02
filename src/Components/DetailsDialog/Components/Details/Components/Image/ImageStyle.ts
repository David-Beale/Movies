import styled from "styled-components";

export const Image = styled.img`
  width: 50%;
  position: relative;
  z-index: 1;
`;

export const SkeletonContainer = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
`;
