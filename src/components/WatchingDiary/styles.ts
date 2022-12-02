import styled from "styled-components";
import { MainColor, PointColor } from "../../style";

export const Container = styled.div`
  position: absolute;
  width: 758px;
  height: 820px;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
  background: ${MainColor};
  border-radius: 20px;
`;
export const Head = styled.div`
  padding: 0 40px;
  width: calc(inherit - 80px);
  height: 67px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  font-weight: 600;
  font-size: 34px;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  > img {
    height: 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
`;
export const Title = styled.div`
  width: 670px;
  height: 64px;
  background: #ffffff;
  border-radius: 12px;
  font-size: 24px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: ${PointColor};
  font-weight: 600;
`;
export const Content = styled.div`
  width: 660px;
  height: 560px;
  background: white;
  border-radius: 12px;
  position: relative;
  padding: 20px;
  font-size: 24px;
  color: ${PointColor};
`;
export const ImgBtn = styled.button`
  width: 183px;
  height: 44px;
  border-radius: 12px;
  background: ${PointColor};
  font-weight: 600;
  color: white;
  border: none;
  font-size: 24px;
  position: fixed;
  bottom: 60px;
  right: 50px;
`;
