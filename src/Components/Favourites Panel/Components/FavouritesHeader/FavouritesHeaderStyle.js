import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 64px;
  text-align: center;
  line-height: 64px;
  border-bottom: 1px solid rgb(204, 204, 204);
  border-top: 1px solid rgb(204, 204, 204);
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`;
