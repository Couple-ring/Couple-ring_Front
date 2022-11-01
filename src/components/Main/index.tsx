import styled from "styled-components";
import { MainColor, PointColor } from "../../style";
import { COLOR } from "../../style";
import { ReviseIcon, Test, Sad, Happy, Angry, Soso } from "../../assets";
import { DiaryType } from "../../interface";
import { useState } from "react";

function Main(): JSX.Element {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const today: string = new Date().getFullYear() + '년 ' + (new Date().getMonth() + 1) + '월 ' + new Date().getDate() + '일';

  return (
    <Container>
      <Head>
        <span>오늘 &#41; {today}</span>
        <span>113일</span>
      </Head>
      {isSignup ? <DiaryContainer /> : <NoSignup />}
    </Container>
  );
};

function DiaryContainer(): JSX.Element {
  const [isWrite, setIsWrite] = useState<boolean>(false);
  const MyDiary: DiaryType = { name: "안윤지", mood: Happy, title: "오늘은 마라탕을 먹었다.", content: "마라탕을 먹었다. 내 최애 마라탕 집인 마라이웃에서 먹었다. 호모나 세상에 마라이웃은 날 배신하지 않는다.너무 맛있었다. 이렇게 맛있는 걸 먹으니 상우가 생각났다.같이 나눠먹었더라면 상우는 죽었겠지.왜냐 상우는 맵찔이기 떄문에 절대 나의 맵기단계를 따라올 수 없기 때문이지 ㅋ 하지만 이렇게 맛있는 걸 나 혼자 먹는다는 것은 있을 수 없는 일이다.미안하지만..너도 먹어줘야겠어", img: Test, mine: true };
  const CoupleDiary: DiaryType = { name: "박상우", mood: Sad, title: "오늘은 출근을 하였다.", content: "어쩌고 저쩌고", img: Test, mine: false };

  return (
    <Diarys>
      {isWrite ? <WriteDiary Diary={MyDiary} /> : <NoWriteDiary name="안윤지" mine={true} />}
      {isWrite ? <WriteDiary Diary={CoupleDiary} /> : <NoWriteDiary name="박상우" mine={false} />}
    </Diarys>
  );
};

function NoSignup(): JSX.Element {
  const Text = [
    { name: "안윤지", title: "아직 연인과 연결되지 않았습니다. " },
    { name: "(NULL)", title: "아직 연인과 연결되지 않았습니다. " }
  ];

  return (
    <Diarys>
      {Text.map((list) => (
        <Box>
          <DiaryHead>
            <span>{list.name}</span>
          </DiaryHead>
          <Content>
            <Title>{list.title}</Title>
          </Content>
        </Box>
      ))}
    </Diarys>
  );
};

function WriteDiary({ Diary }: { Diary: DiaryType }): JSX.Element {
  const previewText: string = Diary.content.length < 100 ? Diary.content : Diary.content.substring(0, 80) + " ...";

  return (
    <Box>
      <DiaryHead>
        <span>{Diary.name}</span>
        <img src={Diary.mood} />
        {Diary.mine && <img src={ReviseIcon} />}
      </DiaryHead>
      <Content>
        <Title>{Diary.title}</Title>
        <Post>{previewText}</Post>
        <Title>오늘의 이미지</Title>
        <img src={Diary.img} />
      </Content>
    </Box>
  );
};

function NoWriteDiary({ name, mine }: { name: string, mine: boolean }): JSX.Element {
  return (
    <Box>
      <DiaryHead>
        <span>{name}</span>
        {mine && <img src={ReviseIcon} />}
      </DiaryHead>
      <Content>
        <Title>( 아직 일기를 작성하지 않았습니다. )</Title>
      </Content>
    </Box>
  );
};

const Container = styled.div` 
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
const Head = styled.div`
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
const Diarys = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-top: 30px;
  color: ${COLOR.black};
`;
const Box = styled.div`
  width: 28vw;
  height: 650px;
  background: white;
  border-radius: 20px;
`;
const DiaryHead = styled.div`
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
const Mood = styled.div`
  width: 294px;
  height: 47px;
  background: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
  width: calc(inherit - 60px);
  padding: 0 30px;
  margin-top: 30px;
  >img{
  width: 273px;
  height: 273px;
  border-radius: 12px;
  };
`;
const Title = styled.span`
  font-weight: 600;
  font-size: 25px;
`;
const Post = styled.span`
  font-weight: 500;
  font-size: 25px;
`;

export default Main;