import styled from "styled-components";
import redStar from "../../Assets/images/redStar.svg";

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
export const SiteHeading = styled.div`
  text-transform: uppercase;
  color: #fff;
  text-shadow: -1px -1px 5px ${({ theme }) => theme.primary},
    1px -1px 5px ${({ theme }) => theme.primary},
    -1px 1px 5px ${({ theme }) => theme.primary},
    1px 1px 5px ${({ theme }) => theme.primary};
  font-size: 21px;
  letter-spacing: 2px;
  @media only screen and (min-width: 480px) {
    font-size: 36px;
  }
`;
export const Button = styled.div<Props["button"]>`
  position: absolute;
  top: 14px;
  left: 10px;
  width: 36px;
  height: 36px;
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  background: url(${redStar}) 50% 50% no-repeat;
  background-size: 60%;
  transform: rotate(${({ open }) => (open ? 360 : 0)}deg);
  transition: all 0.75s;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
`;
