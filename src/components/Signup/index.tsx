import * as S from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CoupleInfo from "./CoupleInfo";
import MyInfo from "./MyInfo";

const Signup = () => {
  const [Info, setInfo] = useState<boolean>(false);
  const [signupCheck, setSignupCheck] = useState<boolean>(false);

  return (
    <>
      {Info ? <CoupleInfo /> : <MyInfo setSignupCheck={setSignupCheck} />}
      {signupCheck && (
        <CheckModal setInfo={setInfo} setSignupCheck={setSignupCheck} />
      )}
    </>
  );
};

interface CheckModalProps {
  setInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckModal = ({ setInfo, setSignupCheck }: CheckModalProps) => {
  const navigate = useNavigate();

  const goCoupleInfo = () => {
    setInfo(true);
    setSignupCheck(false);
  };

  const goLogin = () => {
    alert("로그인을 진행해주세요.");
    navigate("/login");
  };

  return (
    <S.Background>
      <S.Box>
        <>당신의 애인이 커플링에 가입하였나요?</>
        <S.Btns>
          <S.Btn onClick={goCoupleInfo}>예</S.Btn>
          <S.Btn onClick={goLogin}>아니요</S.Btn>
        </S.Btns>
      </S.Box>
    </S.Background>
  );
};

export default Signup;
