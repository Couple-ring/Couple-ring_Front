import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const CoupleInfo = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const myAccountId = localStorage.getItem("myId");
  const connect = async () => {
    await axios.patch(`${BASE_URL}/auth/connect`, {
      coupleAccountId: id,
      myAccountId: myAccountId,
    });
  };
  const onConnect = async () => {
    if (id == myAccountId) {
      alert("본인은 본인과 연결할 수 없습니다.");
    } else {
      try {
        await connect();
        navigate("/login");
      } catch (error: any) {
        if (error.response.data.status === 404)
          alert("존재하지 않는 아이디입니다.");
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Head>회원가입</S.Head>
      <S.Inputs>
        <S.SignupInput>
          <S.Title>연인 아이디</S.Title>
          <S.Input
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </S.SignupInput>
      </S.Inputs>
      <S.SignupBtn onClick={onConnect}>연결하기</S.SignupBtn>
    </S.Wrapper>
  );
};

export default CoupleInfo;
