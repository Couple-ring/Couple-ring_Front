import * as S from "./styles";
import { Happy, Sad, Soso, Angry, NullImg } from "../../assets";
import TodayImg from "./modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getAccessToken } from "../../utils/Token";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function WatchingDiary(): JSX.Element {
  const access_token = getAccessToken();
  const [isImg, setIsImg] = useState(false);
  const { id } = useParams();
  const [diary, setDiary] = useState<any>([]);

  const getDiary = async () => {
    await axios
      .get(`${BASE_URL}/diaries/${id}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        setDiary(res.data);
      });
  };

  const Mood = () => {
    switch (diary.mood) {
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

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <>
      <S.Container>
        <S.Head>
          <img src={Mood()} />
        </S.Head>
        <S.Wrapper>
          <S.Title>{diary.title}</S.Title>
          <S.Content>
            {diary.content}
            <S.ImgBtn onClick={() => setIsImg(true)}>오늘의 이미지</S.ImgBtn>
          </S.Content>
        </S.Wrapper>
      </S.Container>
      {isImg && <TodayImg setIsImg={setIsImg} img={diary.imageUrl} />}
    </>
  );
}

export default WatchingDiary;
