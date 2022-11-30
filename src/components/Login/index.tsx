import * as S from "./styles";
import { AuthType } from "../../interface";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  const Text: AuthType[] = [
    { title: "아이디", type: "text", name: "id" },
    { title: "비밀번호", type: "password", name: "password" },
  ];

  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const { id, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const login = async () => {
    await axios
      .post(`${BASE_URL}/auth/login`, {
        accountId: id,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("couple_ring_access_token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);
      });
  };

  const onLogin = async () => {
    try {
      await login();
      navigate("/main");
    } catch (error: any) {
      if (error.response.data.status == 400) alert("비밀번호가 맞지 않습니다.");
      else if (error.response.data.status == 404)
        alert("가입되지 않은 아이디입니다.");
    }
  };

  return (
    <S.Container>
      <S.Head>로그인</S.Head>
      <S.Inputs>
        {Text.map((list) => (
          <S.LoginInput>
            <S.Title>{list.title}</S.Title>
            <S.Input type={list.type} name={list.name} onChange={onChange} />
          </S.LoginInput>
        ))}
      </S.Inputs>
      <S.LoginBtn onClick={onLogin}>로그인하기</S.LoginBtn>
    </S.Container>
  );
};

export default Login;
