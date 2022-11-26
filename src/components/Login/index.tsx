import * as S from "./styles";
import { AuthType } from "../../interface";

const Login = () => {
  return (
    <S.Container>
      <S.Head>로그인</S.Head>
      <LoginInputs />
      <S.LoginBtn>로그인하기</S.LoginBtn>
    </S.Container>
  );
};

const LoginInputs = () => {
  const Text: AuthType[] = [
    { title: "아이디", type: "text", name: 'id' },
    { title: "비밀번호", type: "password", name: "password" },
  ];

  return (
    <S.Inputs>
      {Text.map((list) => (
        <S.LoginInput>
          <S.Title>{list.title}</S.Title>
          <S.Input type={list.type} />
        </S.LoginInput>
      ))}
    </S.Inputs>
  );
};

export default Login;