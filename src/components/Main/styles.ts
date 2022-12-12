import styled from "styled-components";
import { MainColor, PointColor, COLOR } from "../../style";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 63vw;
  height: 800px;
  border-radius: 20px;
  background: ${MainColor};
  margin-top: 30px;
`;
export const Head = styled.div`
  width: calc(inherit - 72px);
  height: 92px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
`;
export const Diarys = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-top: 30px;
  color: ${COLOR.black};
`;
export const Box = styled.div`
  width: 28vw;
  height: 650px;
  background: white;
  border-radius: 20px;
`;
export const DiaryHead = styled.div`
  width: inherit;
  height: 80px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  font-weight: 600;
  font-size: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Mood = styled.div`
  width: 294px;
  height: 47px;
  background: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
  width: calc(inherit - 60px);
  padding: 0 30px;
  margin-top: 30px;
  > img {
    width: 300px;
    border-radius: 12px;
  }
`;
export const Title = styled.span`
  font-weight: 600;
  font-size: 25px;
`;
export const Post = styled.span`
  font-weight: 500;
  font-size: 25px;
`;
