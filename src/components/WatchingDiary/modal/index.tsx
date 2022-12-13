import * as S from "./styles";
import { ImgIcon, NullImg } from "../../../assets";

interface ModalPropsType {
  setIsImg: React.Dispatch<React.SetStateAction<boolean>>;
  img: string | null;
}

function TodayImg({ setIsImg, img }: ModalPropsType): JSX.Element {
  return (
    <S.Background>
      <S.Container>
        <S.Head>
          <S.HeadLeft>
            <span>오늘의 이미지</span>
            <img src={ImgIcon} />
          </S.HeadLeft>
          <S.HeadRight onClick={() => setIsImg(false)}>X</S.HeadRight>
        </S.Head>
        {img == null ? <img src={NullImg} /> : <img src={img} />}
      </S.Container>
    </S.Background>
  );
}

export default TodayImg;
