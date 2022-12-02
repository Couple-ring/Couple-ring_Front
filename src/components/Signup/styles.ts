import styled from "styled-components";
import { MainColor, PointColor } from "../../style";

export const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  z-index: 3;
`;
export const Box = styled.div`
  width: 483px;
  height: 247px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 27px;
  color: ${PointColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const Btns = styled.div`
  display: flex;
  gap: 50px;
`;
export const Btn = styled.button`
  background: ${PointColor};
  border-radius: 12px;
  height: 48px;
  width: 174px;
  left: 760px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 27px;
  :hover {
    background: ${MainColor};
  }
`;
