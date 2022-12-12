import styled from "styled-components";
import { PointColor } from "../../../style";

export const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  z-index: 3;
`;
export const Container = styled.div`
  min-width: 603px;
  min-height: 750px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  > img {
    position: absolute;
    width: 538px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
  }
`;
export const Head = styled.div`
  width: calc(inherit - 52px);
  height: 37px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  padding: 17px 26px;
  display: flex;
  justify-content: space-between;
  color: white;
`;
export const HeadLeft = styled.div`
  width: 300px;
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 15px;
`;
export const HeadRight = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 700;
`;
