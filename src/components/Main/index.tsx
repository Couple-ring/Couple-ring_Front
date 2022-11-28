import { ReviseIcon, Test, Sad, Happy, Angry, Soso } from "../../assets";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import axios from "axios";
import { getAccessToken } from "../../utils/Token";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Main = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const today: string = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  const [day, setDay] = useState<number>(0);
  const [myDiary, setMyDiary] = useState([]);
  const [coupleDiary, setCoupleDiary] = useState([]);

  const getDiary = async () => {
    const access_token = getAccessToken();
    await axios.get(`${BASE_URL}/diaries?date=${today}`,
      {
        headers: { Authorization: `Bearer ${access_token}` }
      }
    ).then((res) => {
      setMyDiary(res.data.myDiary);
      setCoupleDiary(res.data.coupleDiary);
      setDay(res.data.day);
    });
  };

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <S.Container>
      <S.Head>
        <span>오늘 &#41; {today}</span>
        <span>{day}일</span>
      </S.Head>
      {!isSignup ? <DiaryContainer myDiary={myDiary} coupleDiary={coupleDiary} /> : <NoSignup />}
    </S.Container>
  );
};

const DiaryContainer = ({ myDiary, coupleDiary }: { myDiary: any, coupleDiary: any }) => {
  return (
    <S.Diarys>
      <WriteDiary Diary={myDiary} />
      <WriteDiary Diary={coupleDiary} />
    </S.Diarys>
  );
};

const NoSignup = () => {
  const Text = [
    { name: "안윤지", title: "아직 연인과 연결되지 않았습니다. " },
    { name: "(NULL)", title: "아직 연인과 연결되지 않았습니다. " }
  ];

  return (
    <S.Diarys>
      {Text.map((list) => (
        <S.Box>
          <S.DiaryHead>
            <span>{list.name}</span>
          </S.DiaryHead>
          <S.Content>
            <S.Title>{list.title}</S.Title>
          </S.Content>
        </S.Box>
      ))}
    </S.Diarys>
  );
};

const WriteDiary = ({ Diary }: { Diary: any }) => {
  // const previewText: string = Diary.content.length < 80 ? Diary.content : Diary.content.substring(0, 80) + " ...";
  const navigate = useNavigate();

  return (
    <S.Box>
      <S.DiaryHead>
        <span>{Diary.name}</span>
        <img src={Diary.feel} />
      </S.DiaryHead>
      <S.Content onClick={() => navigate(`/revise_diary/${Diary.id}`)}>
        <S.Title>{Diary.title}</S.Title>
        <S.Post>{Diary.content}</S.Post>
        <S.Title>오늘의 이미지</S.Title>
        {Diary.Url == null ? <img src={Test} /> : <img src={Diary.Url} />}
      </S.Content>
    </S.Box>
  );
};

export default Main;