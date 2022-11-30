import * as S from "./styles";
import { Happy, Sad, Soso, Angry } from "../../assets";
import TodayImg from "./modal";
import { useState } from "react";

function WatchingDiary(): JSX.Element {
  const [isImg, setIsImg] = useState(false);

  return (
    <>
      <S.Container>
        <S.Head>
          <img src={Happy} />
          <span>Me</span>
        </S.Head>
        <S.Wrapper>
          <S.Title></S.Title>
          <S.Content>
            <></>
            <S.ImgBtn onClick={() => setIsImg(true)}>오늘의 이미지</S.ImgBtn>
          </S.Content>
        </S.Wrapper>
      </S.Container>
      {isImg && <TodayImg setIsImg={setIsImg} />}
    </>
  );
}

export default WatchingDiary;
