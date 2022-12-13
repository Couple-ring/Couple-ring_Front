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
  const [moodImg, setMoodImg] = useState<string>(Happy);
  const [preview, setPreview] = useState<any>(Test);
  const [upLoadImg, setUpLoadImg] = useState<File | null>(null);

  const [reviseDiary, setReviseDiary] = useState({
    title: "",
    content: "",
  });
  const { title, content } = reviseDiary;

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

  const imgChange = (e: any) => {
    if (e.target.files[0]) {
      setUpLoadImg(e.target.files[0]);
      setPreview(e.target.files[0]);
    } else {
      setUpLoadImg(upLoadImg);
      setPreview(preview);
      return;
    }
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const upLoadFile = async () => {
    if (!upLoadImg) return;
    const formData = new FormData();
    formData.append("image", upLoadImg);
    const response = await axios.post(`${BASE_URL}/images`, formData, {
      headers: { "Content-Type": `multipart/form-data` },
    });
    return response.data.imageUrl;
  };

  const revise = async () => {
    const access_token = getAccessToken();
    await axios.patch(
      `${BASE_URL}/diaries/${id}`,
      {
        title: title,
        mood: mood,
        imageUrl: await upLoadFile(),
        content: content,
      },
      { headers: { Authorization: `Bearer ${access_token}` } }
    );
  };

  const onRevise = async () => {
    try {
      await revise();
      alert("다이어리가 성공적으로 수정되었습니다.");
      navigate("/main");
    } catch (error: any) {
      if (error.response.status == 400) {
        alert("제목이나 내용은 null일 수 없습니다.");
      }
    }
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setReviseDiary({
      ...reviseDiary,
      [name]: value,
    });
  };

  return (
    <>
      <S.Container>
        <S.Head>
          <img src={moodImg} />
          <img onClick={() => setIsMood(!isMood)} src={ReviseIcon} />
        </S.Head>
        <S.Wrapper>
          <S.Title name="title" onChange={onChange} placeholder="수정할 제목" />
          <S.Content
            name="content"
            onChange={onChange}
            placeholder="수정할 내용"
          />
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
