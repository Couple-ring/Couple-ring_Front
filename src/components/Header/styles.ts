import styled from "styled-components";
import { COLOR, PointColor, MainColor, Font } from "../../style";

export const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  background: rgba(255, 255, 255, 0.5);
  z-index: 99;
  position: absolute;
`;
export const Container = styled.div`
  width: 100vw;
  height: 64px;
  background: ${PointColor};
  display: flex;
  img {
    width: 95px;
  }
  justify-content: space-around;
  align-items: center;
`;
export const Btn = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 24px;
  gap: 40px;
  color: white;
  img {
    width: 40px;
  }
  > a {
    text-decoration: none;
    color: white;
    display: flex;
  }
`;
export const AccountBox = styled.div`
  width: 538px;
  height: 221px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const AccountBoxHead = styled.div`
  width: inherit;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  color: white;
  background: ${COLOR.red};
  border-radius: 20px 20px 0px 0px;
`;
export const AccountBoxBtns = styled.div`
  display: flex;
  gap: 54px;
  width: inherit;
  height: 145px;
  align-items: center;
  justify-content: center;
`;
export const AccountBoxBtn = styled.div`
  width: 156px;
  height: 74px;
  border-radius: 12px;
  background: ${COLOR.pink};
  :hover {
    background: ${COLOR.red};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  color: white;
`;
export const SearchInput = styled.input`
  width: 430px;
  height: 49px;
  background: #ffffff;
  border-radius: 100px;
  outline: none;
  border: none;
  padding: 0 20px;
  color: ${PointColor};
  font-size: 24px;
  font-weight: 700;
  font-family: ${Font};
`;
