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
import { useState, useRef } from "react";
import axios from "axios";
import { getAccessToken } from "../../utils/Token";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ReviseDiary = () => {
  const navigate = useNavigate();
  const fileInput = useRef<any>(null);
  const { id } = useParams();
  const [isMood, setIsMood] = useState<boolean>(false);
  const [fileName, setFileName] = useState<any>(Test);
  const [moodImg, setMoodImg] = useState<string>(Happy);
  const [preview, setPreview] = useState(Test);
  const [resImg, setResImg] = useState();

  const [reviseDiary, setReviseDiary] = useState({
    title: "",
    content: "",
  });
  const { title, content } = reviseDiary;

  const today: string =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();

  const settingMood = () => {
    switch (moodImg) {
      case Happy:
        return "Happy";
      case Sad:
        return "Sad";
      case Soso:
        return "Soso";
      case Angry:
        return "Angry";
    }
  };

  const mood = settingMood();

  const upLoadFile = async () => {
    const access_token = getAccessToken();
    const formData = new FormData();
    let file = new Blob([preview]);
    formData.append("file", file, fileName);
    await axios
      .post(`${BASE_URL}/file`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setResImg(res.data.fileName);
      });
  };

  const revise = async () => {
    const access_token = getAccessToken();
    await axios
      .patch(
        `${BASE_URL}/diaries/${id}`,
        {
          title: title,
          mood: mood,
          fileId: resImg,
          content: content,
        },
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      .then(() => {
        alert("오늘자 다이어리가 수정되었습니다.");
        navigate("/main");
      });
  };

  const onRevise = async () => {
    try {
      await revise();
    } catch (error) {
      console.log(error);
    }
    // await upLoadFile();
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setReviseDiary({
      ...reviseDiary,
      [name]: value,
    });
  };

  const imgChange = (e: any) => {
    if (e.target.files[0]) {
      setPreview(e.target.files[0]);
      setFileName(e.target.files[0].name);
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
          <img src={moodImg} />
          <img onClick={() => setIsMood(!isMood)} src={ReviseIcon} />
        </S.Head>
        <S.Wrapper>
          <S.Title name="title" onChange={onChange} />
          <S.Content name="content" onChange={onChange} />
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
      {isMood && <Moods setMoodImg={setMoodImg} />}
    </>
  );
};

interface MoodModalProps {
  setMoodImg: React.Dispatch<React.SetStateAction<string>>;
}

const Moods = ({ setMoodImg }: MoodModalProps) => {
  return (
    <S.Box>
      <S.ImgBox onClick={() => setMoodImg(Happy)}>
        <img src={HappyPink} />
      </S.ImgBox>
      <S.ImgBox onClick={() => setMoodImg(Angry)}>
        <img src={AngryPink} />
      </S.ImgBox>
      <S.ImgBox onClick={() => setMoodImg(Soso)}>
        <img src={SosoPink} />
      </S.ImgBox>
      <S.ImgBox onClick={() => setMoodImg(Sad)}>
        <img src={SadPink} />
      </S.ImgBox>
    </S.Box>
  );
};

export default ReviseDiary;
