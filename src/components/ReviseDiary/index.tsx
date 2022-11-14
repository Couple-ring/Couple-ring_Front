import styled from "styled-components";
import { Happy, Sad, Soso, Angry, Test, ReviseIcon } from "../../assets";
import { MainColor, PointColor } from "../../style";
import { DiaryType } from "../../interface";
import { useState } from "react";

function ReviseDiary(): JSX.Element {
  const Diary: DiaryType = { name: "안윤지", mood: Happy, title: "오늘은 마라탕을 먹었다.", content: "마라탕을 먹었다. 내 최애 마라탕 집인 마라이웃에서 먹었다. 호모나 세상에 마라이웃은 날 배신하지 않는다.너무 맛있었다. 이렇게 맛있는 걸 먹으니 상우가 생각났다.같이 나눠먹었더라면 상우는 죽었겠지.왜냐 상우는 맵찔이기 떄문에 절대 나의 맵기단계를 따라올 수 없기 때문이지 ㅋ 하지만 이렇게 맛있는 걸 나 혼자 먹는다는 것은 있을 수 없는 일이다.미안하지만..너도 먹어줘야겠어", img: Test, mine: true };
  const [isMood, setIsMood] = useState<boolean>(false);
  const [mood, setMood] = useState<string>(Diary.mood);

  return (
    <>
      <Container>
        <Head >
          <img src={mood} />
          <img
            onClick={() => setIsMood(!isMood)}
            src={ReviseIcon}
          />
        </Head>
        <Wrapper>
          <Title defaultValue={Diary.title}></Title>
          <Content defaultValue={Diary.content} />
          <ImgBtn>이미지 다시 올리기</ImgBtn>
        </Wrapper>
        <ReviseBtn>수정하기</ReviseBtn>
      </Container>
      {isMood && <Moods setMood={setMood} />}
    </>
  );
};

interface MoodModalProps {
  setMood: React.Dispatch<React.SetStateAction<string>>;
};

function Moods({ setMood }: MoodModalProps): JSX.Element {
  return (
    <Box>
      <ImgBox onClick={() => setMood(Happy)}><img src={Happy} /></ImgBox>
      <ImgBox><img src={Angry} /></ImgBox>
      <ImgBox><img src={Soso} /></ImgBox>
      <ImgBox><img src={Sad} /></ImgBox>
    </Box>
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
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
`;
const Title = styled.input`
  width: 670px;
  height: 64px;
  background: #FFFFFF;
  border-radius: 12px;
  font-size: 24px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: ${MainColor};
  font-weight: 600;
  border: none;
  outline: none;
`;
const Content = styled.textarea`
  width: 660px;
  height: 500px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  font-size: 24px;
  color: ${MainColor};
  border: none;
  outline: none;
  font-weight: 600;
`;
const ImgBtn = styled.button`
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
const ReviseBtn = styled.button`
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
const Box = styled.div`
  width: 385px;
  height: 303px;
  background: ${PointColor};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 90px;
  left: 150px;
`;
const ImgBox = styled.div`
  width: 339px;
  height: 60px;
  background: ${MainColor};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ReviseDiary;