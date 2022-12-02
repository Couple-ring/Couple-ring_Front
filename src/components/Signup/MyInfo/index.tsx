import * as S from "./styles";
import { AuthType } from "../../../interface";
import axios from "axios";
import { useState } from "react";

interface MyInfoProps {
  setSignupCheck: React.Dispatch<React.SetStateAction<boolean>>;
}
const BASE_URL = process.env.REACT_APP_BASE_URL;

const MyInfo = ({ setSignupCheck }: MyInfoProps) => {
  const Text: AuthType[] = [
    { title: "이름", type: "text", name: "name" },
    { title: "아이디", type: "text", name: "id" },
    { title: "비밀번호", type: "password", name: "password" },
    { title: "비밀번호 확인", type: "password", name: "checkPassword" },
    { title: "연애를 시작한 날짜", type: "date", name: "startDate" },
  ];

  const [inputs, setInputs] = useState({
    name: "",
    id: "",
    password: "",
    checkPassword: "",
    startDate: "",
  });

  const { name, id, password, checkPassword, startDate } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const signup = async () => {
    await axios.post(`${BASE_URL}/auth/signup`, {
      accountId: id,
      name: name,
      password: password,
      startDate: startDate,
    });
  };

  const onSignup = async () => {
    if (password === checkPassword) {
      try {
        await signup();
        localStorage.setItem("myId", id);
        setSignupCheck(true);
      } catch (error: any) {
        if (error.response.data.status === 400) alert("존재하는 아이디입니다.");
      }
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <S.Container>
      <S.Head>회원가입</S.Head>
      <S.Inputs>
        {Text.map((list) => (
          <S.SignupInput>
            <S.Title>{list.title}</S.Title>
            <S.Input type={list.type} name={list.name} onChange={onChange} />
          </S.SignupInput>
        ))}
      </S.Inputs>
      <S.SignupBtn onClick={onSignup}>가입하기</S.SignupBtn>
    </S.Container>
  );
};

export default MyInfo;
