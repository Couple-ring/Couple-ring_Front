import styled from "styled-components";
import { PointColor } from "../../../style";
import { ImgIcon, Test, NullImg } from "../../../assets";

interface CheckModalProps {
  setIsImg: React.Dispatch<React.SetStateAction<boolean>>;
}

function TodayImg({ setIsImg }: CheckModalProps): JSX.Element {
  return (
    <Background>
      <Container>
        <Head>
          <HeadLeft>
            <span>오늘의 이미지</span>
            <img src={ImgIcon} />
          </HeadLeft>
          <HeadRight onClick={() => setIsImg(false)}>X</HeadRight>
        </Head>
        <img src={NullImg} />
      </Container>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  z-index: 3;
`;
const Container = styled.div`
  width: 603px;
  height: 659px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  > img {
    position: absolute;
    width: 538px;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
  }
`;
const Head = styled.div`
  width: calc(inherit - 52px);
  height: 37px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  padding: 17px 26px;
  display: flex;
  justify-content: space-between;
  color: white;
`;
const HeadLeft = styled.div`
  width: 300px;
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 15px;
`;
const HeadRight = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 700;
`;

export default TodayImg;
