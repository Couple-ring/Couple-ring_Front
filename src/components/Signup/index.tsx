import * as S from './styles';
import { useState } from "react";
import CoupleInfo from "./CoupleInfo";
import MyInfo from "./MyInfo";

const Signup = () => {
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

const CheckModal = ({ setInfo, setSignupCheck }: CheckModalProps) => {
  const GoCoupleInfo = () => {
    setInfo(true);
    setSignupCheck(false);
  };

  return (
    <S.Background>
      <S.Box>
        <>당신의 애인이 커플링에 가입하였나요?</>
        <S.Btns>
          <S.Btn onClick={GoCoupleInfo}>예</S.Btn>
          <S.Btn>아니요</S.Btn>
        </S.Btns>
      </S.Box>
    </S.Background>
  );
};

export default Signup;