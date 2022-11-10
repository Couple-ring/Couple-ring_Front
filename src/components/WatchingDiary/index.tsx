import styled from "styled-components";
import { MainColor, PointColor } from "../../style";
import { Happy, Sad, Soso, Angry } from "../../assets";
import TodayImg from "./modal";
import { useState } from "react";

function WatchingDiary(): JSX.Element {
  const [isImg, setIsImg] = useState(false);

  return (
    <>
      <Container>
        <Head>
          <img src={Happy} />
          <span>Me</span>
        </Head>
        <Wrapper>
          <Title></Title>
          <Content>
            <></>
            <ImgBtn onClick={() => setIsImg(true)}>오늘의 이미지</ImgBtn>
          </Content>
        </Wrapper>
      </Container>
      {isImg && <TodayImg setIsImg={setIsImg} />}
    </>
  );
};

const Container = styled.div`
  position: absolute;
  width: 758px;
  height: 820px;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
  background: ${MainColor};
  border-radius: 20px;
`;
const Head = styled.div`
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
  >img{
    width: 320px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
`;
const Title = styled.div`
  width: 700px;
  height: 64px;
  background: #FFFFFF;
  border-radius: 12px;
`;
const Content = styled.div`
  width: 700px;
  height: 600px;
  background: white;
  border-radius: 12px;
  position: relative;
`;
const ImgBtn = styled.button`
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

export default WatchingDiary;