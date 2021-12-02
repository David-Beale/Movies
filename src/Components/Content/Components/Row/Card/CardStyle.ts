import styled from "styled-components";
import star from "../../../../../Assets/images/star.svg";
import redStar from "../../../../../Assets/images/redStar.svg";

interface Props {
  CardContainer: {
    left: number;
    top: number;
    ref: any;
  };
  Button: {
    favourite: boolean;
  };
}

export const CardContainer = styled.div.attrs<Props["CardContainer"]>(
  (props) => ({
    style: {
      left: `${props.left}px`,
      top: `${props.top}px`,
    },
  })
)<Props["CardContainer"]>`
  position: absolute;
  height: 300px;
  width: 300px;
  background: rgb(236, 240, 243);
  border-radius: 25px;
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 13px 13px 20px ${({ theme }) => theme.primaryShadow},
    -13px -13px 20px rgb(255 255 255);
  z-index: 1;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  cursor: pointer;
  @media only screen and (min-width: 480px) {
    margin: 25px;
    &:hover {
      z-index: 2;
      box-shadow: 13px 13px 40px ${({ theme }) => theme.primaryShadow},
        -13px -13px 40px rgb(255 255 255);
    }
  }
`;

export const Image = styled.img`
  max-height: 169px;
  max-width: 300px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Title = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 18px;
  padding: 10px;
  overflow: hidden;
  transform: translateZ(20px);
  user-select: none;
`;

export const Button = styled.button<Props["Button"]>`
  position: absolute;
  bottom: 15px;
  right: 50%;
  width: 36px;
  height: 36px;
  border: 1px solid #fff;
  border-radius: 50%;
  background: url(${({ favourite }) => (favourite ? redStar : star)}) 50% 50%
    no-repeat;
  background-color: rgba(0, 0, 0, 0.1);
  background-size: 60%;
  cursor: pointer;
  transform: translateZ(20px) translateX(50%);
  @media only screen and (min-width: 480px) {
    &:hover {
      background-color: rgba(
        1,
        118,
        228,
        ${({ favourite }) => (favourite ? "0.3" : "0.7")}
      );
    }
  }
`;
