import styled from "styled-components";
import { Font, MainColor, PointColor } from "../../../style";

export const Container = styled.div`
  width: 548px;
  height: 760px;
  background: #ffffff;
  border-radius: 20px;
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Head = styled.span`
  width: calc(inherit - 34px);
  height: 77px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  padding-left: 34px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  color: white;
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-left: 34px;
  margin-top: 30px;
`;
export const SignupInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Title = styled.span`
  font-weight: 600;
  font-size: 22px;
  color: ${PointColor};
`;
export const Input = styled.input`
  width: 452px;
  height: 44px;
  border: none;
  outline: none;
  background: ${MainColor};
  border-radius: 12px;
  font-size: 20px;
  color: white;
  padding: 0 10px;
  font-weight: 600;
  :focus {
    background: ${PointColor};
  }
  font-family: ${Font};
`;
export const SignupBtn = styled.button`
  width: 236px;
  height: 56px;
  color: white;
  font-weight: 600;
  font-size: 25px;
  border-radius: 20px;
  background: ${MainColor};
  border: none;
  margin-left: 156px;
  margin-top: 35px;
  :hover {
    background: ${PointColor};
  }
`;
