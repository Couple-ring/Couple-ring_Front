import * as S from "./styles";
import { useState, useRef } from "react";
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
  BlueReviseIcon,
} from "../../assets";
import axios from "axios";
import { getAccessToken } from "../../utils/Token";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const WritingDiary = () => {
  const navigate = useNavigate();
  const today: string = new Date().toISOString().slice(0, 10);
  const [moodImg, setMoodImg] = useState<string>(HappyPink);
  const [isMoodModal, setIsMoodModal] = useState<boolean>(false);
  const [upLoadImg, setUpLoadImg] = useState<File | null>(null);
  const [preview, setPreview] = useState<any>(Test);
  const [isImg, setIsImg] = useState(false);
  const fileInput = useRef<any>(null);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;
  //미리보기랑 등록할 사진 나누기

  const settingMood = () => {
    switch (moodImg) {
      case HappyPink:
        return "Happy";
      case SadPink:
        return "Sad";
      case SosoPink:
        return "Soso";
      case AngryPink:
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

  const onChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const post = async () => {
    const access_token = getAccessToken();
    await axios.post(
      `${BASE_URL}/diaries`,
      {
        title: title,
        mood: mood,
        imageUrl: await upLoadFile(),
        content: content,
      },
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
  };

  const onPost = async () => {
    try {
      await post();
      alert("다이어리가 성공적으로 생성되었습니다.");
      navigate("/main");
    } catch (error: any) {
      if (error.response.status == 400) {
        alert("제목이나 내용은 null일 수 없습니다.");
      }
    }
  };

  return (
    <>
      <S.Container>
        <S.Head>오늘&#41; {today}</S.Head>
        <S.Inputs>
          <S.TitleInput placeholder="제목" name="title" onChange={onChange} />
          <S.MoodInput defaultValue={moodImg}>
            <img src={moodImg} />
            <img
              src={BlueReviseIcon}
              onClick={() => setIsMoodModal(!isMoodModal)}
            />
          </S.MoodInput>
          <S.DiaryContent
            placeholder="내용"
            name="content"
            onChange={onChange}
          />
        </S.Inputs>
        <S.PostBtn onClick={onPost}>게시하기</S.PostBtn>
        <input
          onChange={imgChange}
          type="file"
          accept="image/*"
          ref={fileInput}
          style={{ display: "none" }}
        />
        <img
          src={preview}
          onClick={() => {
            fileInput.current.click();
          }}
        />
      </S.Container>
      {isMoodModal && <MoodModal setMoodImg={setMoodImg} />}
    </>
  );
};

interface MoodModalProps {
  setMoodImg: React.Dispatch<React.SetStateAction<string>>;
}

const MoodModal = ({ setMoodImg }: MoodModalProps) => {
  return (
    <S.Box>
      <S.ImgBox onClick={() => setMoodImg(HappyPink)}>
        <img src={HappyPink} />
      </S.ImgBox>
      <S.ImgBox onClick={() => setMoodImg(AngryPink)}>
        <img src={AngryPink} />
      </S.ImgBox>
      <S.ImgBox onClick={() => setMoodImg(SosoPink)}>
        <img src={SosoPink} />
      </S.ImgBox>
      <S.ImgBox onClick={() => setMoodImg(SadPink)}>
        <img src={SadPink} />
      </S.ImgBox>
    </S.Box>
  );
};

export default WritingDiary;
