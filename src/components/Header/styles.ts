import styled from "styled-components";
import { COLOR, PointColor } from "../../style";

export const Background = styled.div`
  width: 100vw;
  height: calc( 100vh - 64px);
  background: rgba(255, 255, 255, 0.5);
  z-index: 99;
  position: absolute;
`;
export const Container = styled.div`
  width: 100vw;
  height: 64px;
  background: ${PointColor};
  display: flex;
  img{
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
  img{
    width: 40px;
  }
  >a{
    text-decoration: none;
    color: white;
    display: flex;
  }
`;
export const Box = styled.div`
  width: 424px;
  height: 260px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: absolute;
  top: 100px;
  right: 300px;
  z-index: 2;
`;
export const BoxHead = styled.div`
  width: calc(inherit - 68px);
  height: 60px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  padding: 0 34px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  color: white;
  justify-content: space-between;
  >img{
    width: 30px;
  }
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin: 19px 30px;
  gap: 10px;
`;
export const MyAccount = styled.div`
  display: flex;
  gap: 189px;
`;
export const Me = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const MyName = styled.span`
  font-weight: 600;
  font-size: 28px;
  color: ${PointColor};
`;
export const MyId = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: ${PointColor};
`;
export const DeleteBtn = styled.button`
  width: 83px;
  height: 30px;
  border-radius: 12px;
  background: ${PointColor};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #FFFFFF;
  border: none;
  :hover{
    background: ${COLOR.red};
  }
`;
export const DateInfo = styled.div`
  display: flex;
  color: black;
  >img{
    width: 23px;
  }
  gap: 60px;
`;
export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
`;
export const Date = styled.span`
  font-weight: 600;
  font-size: 24px;
`;
export const AccountBox = styled.div`
  width: 538px;
  height: 221px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFFFFF;
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
  :hover{
    background: ${COLOR.red};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  color: white;
`;