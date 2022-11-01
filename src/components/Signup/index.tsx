import styled from "styled-components";
import { MainColor, PointColor } from "../../style";
import { useState } from "react";
import CoupleInfo from "./CoupleInfo";
import MyInfo from "./MyInfo";

function Signup(): JSX.Element {
  const [Info, setInfo] = useState<boolean>(false);
  const [signupCheck, setSignupCheck] = useState<boolean>(false);

  return (
    <>
      {Info ? <CoupleInfo /> : <MyInfo setSignupCheck={setSignupCheck} />}
      {signupCheck && <CheckModal setInfo={setInfo} setSignupCheck={setSignupCheck} />}
    </>
  );
};

interface CheckModalProps {
  setInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

function CheckModal({ setInfo, setSignupCheck }: CheckModalProps): JSX.Element {
  const GoCoupleInfo = () => {
    setInfo(true);
    setSignupCheck(false);
  };

  return (
    <Background>
      <Box>
        <>당신의 애인이 커플링에 가입하였나요?</>
        <Btns>
          <Btn onClick={GoCoupleInfo}>예</Btn>
          <Btn>아니요</Btn>
        </Btns>
      </Box>
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
const Box = styled.div`
  width: 483px;
  height: 247px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 27px;
  color: ${PointColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const Btns = styled.div`
  display: flex;
  gap: 50px;
`;
const Btn = styled.button`
  background: ${PointColor};
  border-radius: 12px;
  height: 48px;
  width: 174px;
  left: 760px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 27px;
  :hover{
    background: ${MainColor};
  }
`;


export default Signup;