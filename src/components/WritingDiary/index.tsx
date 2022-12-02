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
  const [preview, setPreview] = useState(Test);
  // const fileInput = useRef<any>(null);

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

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;

  // const imgChange = (e: any) => {
  //   if (e.target.files[0]) {
  //     setPreview(e.target.files[0]);
  //   } else {
  //     setPreview(preview);
  //     return;
  //   }
  //   const reader: any = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setPreview(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  const onChange = (e: any) => {
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
        fileId: null,
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
    } catch (error) {
      console.log(error);
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
        {/* <input
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
        /> */}
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
