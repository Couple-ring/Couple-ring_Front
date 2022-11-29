import * as S from "./styles";
import {
  HappyPink,
  SadPink,
  SosoPink,
  AngryPink,
  Test,
  ReviseIcon,
  Happy,
  Sad,
  Soso,
  Angry,
} from "../../assets";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getAccessToken } from "../../utils/Token";
import { useParams } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ReviseDiary = () => {
  const fileInput = useRef<any>(null);
  const { id } = useParams();
  const [isMood, setIsMood] = useState<boolean>(false);
  const [a, setA] = useState<any>(Test);
  const [myDiary, setMyDiary] = useState<any>([]);
  const [mood, setMood] = useState<string>(Soso);
  const [preview, setPreview] = useState(Test);
  const today: string =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();

  const [reviseDiary, setReviseDiary] = useState({
    title: "",
    content: "",
  });

  const { title, content } = reviseDiary;

  const getMyDiary = async () => {
    const access_token = getAccessToken();
    await axios
      .get(`${BASE_URL}/diaries?date=${today}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        setMyDiary(res.data.myDiary);
      });
  };

  useEffect(() => {
    getMyDiary();
  }, []);

  const upLoadFile = async () => {
    const access_token = getAccessToken();
    const formData = new FormData();
    let file = new Blob([preview]);
    formData.append("file", file, a);
    await axios.post(`${BASE_URL}/file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  const onRevise = async () => {
    await upLoadFile();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReviseDiary({
      ...reviseDiary,
      [name]: value,
    });
  };

  const imgChange = (e: any) => {
    if (e.target.files[0]) {
      setPreview(e.target.files[0]);
      setA(e.target.files[0].name);
    } else {
      setPreview(preview);
      return;
    }
    const reader: any = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <S.Container>
        <S.Head>
          <img src={mood} />
          <img onClick={() => setIsMood(!isMood)} src={ReviseIcon} />
        </S.Head>
        <S.Wrapper>
          <S.Title
            name="title"
            onChange={onChange}
            defaultValue={myDiary.title}
          />
          <S.Content name="content" defaultValue={myDiary.content} />
          <input
            onChange={imgChange}
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
          />
          <img
            src={preview}
            onClick={() => {
              fileInput.current.click();
            }}
          />
        </S.Wrapper>
        <S.ReviseBtn onClick={onRevise}>수정하기</S.ReviseBtn>
      </S.Container>
      {isMood && <Moods setMood={setMood} />}
    </>
  );
};

interface MoodModalProps {
  setMood: React.Dispatch<React.SetStateAction<string>>;
}

const Moods = ({ setMood }: MoodModalProps) => {
  return (
    <S.Box>
      <S.ImgBox onClick={() => setMood(Happy)}>
        <img src={HappyPink} />
      </S.ImgBox>
      <S.ImgBox onClick={() => setMood(Angry)}>
        <img src={AngryPink} />
      </S.ImgBox>
      <S.ImgBox onClick={() => setMood(Soso)}>
        <img src={SosoPink} />
      </S.ImgBox>
      <S.ImgBox onClick={() => setMood(Sad)}>
        <img src={SadPink} />
      </S.ImgBox>
    </S.Box>
  );
};

export default ReviseDiary;
