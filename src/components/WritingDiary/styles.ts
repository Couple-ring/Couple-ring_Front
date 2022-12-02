import styled from "styled-components";
import { MainColor, PointColor, Font } from "../../style";

export const Container = styled.div`
  width: 724px;
  height: 833px;
  background: ${MainColor};
  border-radius: 20px;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  > img {
    position: absolute;
    width: 217px;
    height: 217px;
    top: 76%;
    left: 20%;
    transform: translate(-50%, -50%);
  }
`;
export const Head = styled.div`
  width: calc(inherit - 22px);
  height: 40px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  padding: 21px;
  font-size: 30px;
  color: white;
  font-weight: 600;
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  margin-top: 20px;
`;
export const TitleInput = styled.input`
  width: 650px;
  height: 63px;
  border-radius: 12px;
  outline: none;
  border: none;
  padding: 0 16px;
  display: flex;
  font-weight: 600;
  font-size: 28px;
  color: ${PointColor};
  ::placeholder {
    color: ${MainColor};
  }
`;
export const MoodInput = styled.button`
  width: 682px;
  height: 63px;
  border-radius: 12px;
  outline: none;
  display: flex;
  align-items: center;
  padding: 16px;
  border: none;
  background: white;
  > img {
    height: 35px;
  }
  gap: 30px;
`;
export const DiaryContent = styled.textarea`
  width: 648px;
  height: 460px;
  background: white;
  border-radius: 12px;
  padding: 16px;
  font-weight: 600;
  font-size: 28px;
  color: ${PointColor};
  border: none;
  font-family: ${Font};
  outline: none;
  ::placeholder {
    color: ${MainColor};
  }
`;
export const PostBtn = styled.button`
  width: 107px;
  height: 47px;
  border-radius: 12px;
  font-size: 20px;
  color: white;
  font-weight: 500;
  background: ${PointColor};
  margin-top: 14px;
  margin-left: 20px;
  border: none;
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
