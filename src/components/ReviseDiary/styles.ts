import styled from "styled-components";
import { MainColor, PointColor, Font } from "../../style";

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
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
  > img {
    width: 273px;
    height: 273px;
    border-radius: 12px;
    position: absolute;
    top: 420px;
    left: 50px;
  }
`;
export const Title = styled.input`
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
  border: none;
  outline: none;
  ::placeholder {
    color: ${MainColor};
  }
`;
export const Content = styled.textarea`
  width: 660px;
  height: 500px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  font-size: 24px;
  color: ${PointColor};
  border: none;
  outline: none;
  font-weight: 600;
  font-family: ${Font};
  ::placeholder {
    color: ${MainColor};
  }
`;
export const ImgBtn = styled.button`
  width: 230px;
  height: 44px;
  border-radius: 12px;
  background: ${PointColor};
  font-weight: 600;
  color: white;
  border: none;
  font-size: 24px;
  position: fixed;
  bottom: 120px;
  right: 50px;
`;
export const ReviseBtn = styled.button`
  width: 150px;
  height: 44px;
  border-radius: 12px;
  background: ${PointColor};
  border: none;
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: white;
  font-weight: 600;
  font-size: 25px;
`;
export const Box = styled.div`
  width: 385px;
  height: 303px;
  background: ${MainColor};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 90px;
  left: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const ImgBox = styled.div`
  width: 339px;
  height: 60px;
  background: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    height: 35px;
  }
`;
