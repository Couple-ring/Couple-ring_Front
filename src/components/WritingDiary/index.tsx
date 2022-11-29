import * as S from "./styles";
import { useState, useRef } from "react";
import { HappyPink, SadPink, SosoPink, AngryPink, Test, ReviseIcon, Happy, Sad, Soso, Angry } from "../../assets";

const WritingDiary = () => {
  const today: string = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
  const [mood, setMood] = useState<string>(HappyPink);
  const [isMoodModal, setIsMoodModal] = useState<boolean>(false);
  const [preview, setPreview] = useState(Test);
  const fileInput = useRef<any>(null);
  const [inputs, setInputs] = useState({
    title: "",
    mood: "",
    content: "",
  });

  const imgChange = (e: any) => {
    if (e.target.files[0]) {
      setPreview(e.target.files[0])
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
        <S.Head>오늘&#41; {today}</S.Head>
        <S.Inputs>
          <S.TitleInput placeholder="제목" />
          <S.MoodInput
            defaultValue={mood}
            onClick={() => setIsMoodModal(!isMoodModal)}
          >
            <img src={mood} />
          </S.MoodInput>
          <S.DiaryContent placeholder="내용"></S.DiaryContent>
        </S.Inputs>
        <S.PostBtn>게시하기</S.PostBtn>
        <input
          onChange={imgChange}
          type="file"
          ref={fileInput}
          style={{ display: "none" }}
        />
        <img
          src={preview}
          onClick={() => { fileInput.current.click() }}
        />
      </S.Container>
      {isMoodModal && <MoodModal setMood={setMood} />}
    </>
  );
};

interface MoodModalProps {
  setMood: React.Dispatch<React.SetStateAction<string>>;
};

const MoodModal = ({ setMood }: MoodModalProps) => {
  return (
    <S.Box>
      <S.ImgBox onClick={() => setMood(HappyPink)}><img src={HappyPink} /></S.ImgBox>
      <S.ImgBox onClick={() => setMood(AngryPink)}><img src={AngryPink} /></S.ImgBox>
      <S.ImgBox onClick={() => setMood(SosoPink)}><img src={SosoPink} /></S.ImgBox>
      <S.ImgBox onClick={() => setMood(SadPink)}><img src={SadPink} /></S.ImgBox>
    </S.Box>
  );
};


export default WritingDiary; 