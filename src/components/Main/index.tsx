import { ReviseIcon, Sad, Happy, Angry, Soso, NullImg } from "../../assets";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import axios from "axios";
import { getAccessToken } from "../../utils/Token";
import { DiaryType } from "../../interface";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Main = () => {
  const { date } = useParams();
  const today: string =
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
  }, [date]);

  return (
    <S.Container>
      <S.Head>
        <span>{today}</span>
        <span>{day}일</span>
      </S.Head>
      <DiaryContainer myDiary={myDiary} coupleDiary={coupleDiary} />
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
      <WriteDiary Diary={myDiary} mine={true} />
      <WriteDiary Diary={coupleDiary} mine={false} />
    </S.Diarys>
  );
};

const WriteDiary = ({ Diary, mine }: { Diary: DiaryType; mine: boolean }) => {
  const previewText: string =
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
        {mine && (
          <span onClick={() => navigate(`/revise_diary/${Diary.id}`)}>
            수정
          </span>
        )}
      </S.DiaryHead>
      <S.Content onClick={() => navigate(`/watch_diary/${Diary.id}`)}>
        <S.Title>{Diary.title}</S.Title>
        <S.Post>{previewText}</S.Post>
        <S.Title>오늘의 이미지</S.Title>
        {Diary.imageUrl == null ? (
          <img src={NullImg} />
        ) : (
          <img src={Diary.imageUrl} />
        )}
      </S.Content>
    </S.Box>
  );
};

export default Main;
