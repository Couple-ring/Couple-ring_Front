import styled from "styled-components";
import { MainColor, PointColor } from "../../style";

export const Container = styled.div`
  width: 900px;
  height: 800px;
  background: ${MainColor};
  border-radius: 20px;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Head = styled.div`
  padding: 0 49px;
  width: calc(inherit - 98px);
  height: 85px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  color: white;
`;
export const Btns = styled.div`
  display: flex;
  gap: 41px;
`;
export const SearchInput = styled.input`
  width: 430px;
  height: 49px;
  background: #ffffff;
  border-radius: 100px;
  outline: none;
  border: none;
  padding: 0 20px;
  color: ${MainColor};
  font-size: 24px;
  font-weight: 700;
`;
export const Body = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 700px;
  background: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MyList = styled.table`
  margin-top: 20px;
  width: 700px;
  border-top: 1px solid;
  border-collapse: collapse;
  font-family: "Noto Sans KR", sans-serif;
  border-color: ${PointColor};
`;
export const NO = styled.th`
  border-bottom: 1px solid;
  height: 40px;
  border-left: none;
  width: 150px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  border-color: ${PointColor};
  color: ${PointColor};
  font-weight: 700;
`;
export const ListTitle = styled.th`
  height: 40px;
  font-weight: 400;
  border-left: none;
  border-bottom: 1px solid;
  font-size: 15px;
  border-color: ${PointColor};
  color: ${PointColor};
  font-weight: 700;
`;
export const Num = styled.td`
  border-bottom: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  text-align: center;
  height: 40px;
  font-weight: 400;
  color: ${PointColor};
  font-size: 14px;
`;
export const Post = styled.td`
  height: 40px;
  border-bottom: 1px solid #cccccc;
  border-right: none;
  font-weight: 400;
  text-align: center;
  color: ${PointColor};
  font-size: 14px;
`;
export const Footer = styled.footer`
  position: absolute;
  margin-top: 30px;
  left: 50%;
`;
