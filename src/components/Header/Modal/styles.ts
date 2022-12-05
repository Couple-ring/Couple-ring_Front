import styled from "styled-components";
import { PointColor, COLOR, MainColor } from "../../../style";

export const Box = styled.div`
  width: 424px;
  height: 260px;
  background: #ffffff;
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
  > img {
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
  color: #ffffff;
  border: none;
  :hover {
    background: ${COLOR.red};
  }
`;
export const DateInfo = styled.div`
  display: flex;
  color: black;
  > img {
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
export const EditBtn = styled.button`
  width: 77px;
  height: 36px;
  background-color: ${MainColor};
  font-weight: 600;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 12px;
  :hover {
    background-color: white;
    color: ${PointColor};
  }
`;
export const NameInput = styled.input`
  outline: none;
  width: 194px;
  height: 40px;
  padding-left: 13px;
  background: ${MainColor};
  color: ${PointColor};
  border-radius: 12px;
  font-size: 23px;
  border: none;
  font-weight: 600;
  ::placeholder{
    color: white;
  }
`;
