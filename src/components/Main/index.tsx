import { ReviseIcon, NullImg, Sad, Happy, Angry, Soso } from "../../assets";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import axios from "axios";
import { getAccessToken } from "../../utils/Token";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Main = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const { date } = useParams();
  const today: any =
    date == null ? new Date().toISOString().slice(0, 10) : date;
  const [day, setDay] = useState<number>(0);
  const [myDiary, setMyDiary] = useState([]);
  const [coupleDiary, setCoupleDiary] = useState([]);

  const getDiary = async () => {
    const access_token = getAccessToken();
    await axios
      .get(`${BASE_URL}/diaries?date=${today}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
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
        <span>{today}</span>
        <span>{day}일</span>
      </S.Head>
      {!isSignup ? (
        <DiaryContainer myDiary={myDiary} coupleDiary={coupleDiary} />
      ) : (
        <NoSignup />
      )}
    </S.Container>
  );
};

const DiaryContainer = ({
  myDiary,
  coupleDiary,
}: {
  myDiary: any;
  coupleDiary: any;
}) => {
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
    { name: "(NULL)", title: "아직 연인과 연결되지 않았습니다. " },
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
  const previewText: any =
    Diary.content?.length < 80
      ? Diary.content
      : Diary.content?.substring(0, 80) + " ...";
  const navigate = useNavigate();
  const Mood = () => {
    switch (Diary.feel) {
      case "Happy":
        return Happy;
      case "Sad":
        return Sad;
      case "Soso":
        return Soso;
      case "Angry":
        return Angry;
    }
  };

  return (
    <S.Box>
      <S.DiaryHead>
        <span>{Diary.name}</span>
        <img src={Mood()} />
      </S.DiaryHead>
      <S.Content onClick={() => navigate(`/revise_diary/${Diary.id}`)}>
        <S.Title>{Diary.title}</S.Title>
        <S.Post>{previewText}</S.Post>
        <S.Title>오늘의 이미지</S.Title>
        {Diary.Url == null ? <img src={NullImg} /> : <img src={Diary.Url} />}
      </S.Content>
    </S.Box>
  );
};

export default Main;
