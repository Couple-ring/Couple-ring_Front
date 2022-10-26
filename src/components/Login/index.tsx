import styled from "styled-components";
import { MainColor, PointColor } from "../../style";
import { AuthType } from "../../inteface";

function LoginInputs(): JSX.Element {
  const Text: AuthType[] = [
    { title: "로그인", type: "text" },
    { title: "비밀번호", type: "password" },
  ];

  return (
    <Inputs>
      {Text.map((list) => (
        <LoginInput>
          <Title>{list.title}</Title>
          <Input type={list.type} />
        </LoginInput>
      ))}
    </Inputs>
  );
};

function Login(): JSX.Element {
  return (
    <Container>
      <Head>로그인</Head>
      <LoginInputs />
      <LoginBtn>로그인하기</LoginBtn>
    </Container>
  );
};

const Container = styled.div`
  width: 548px;
  height: 418px;
  border-radius: 20px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Head = styled.span`
  width: calc(inherit - 34px);
  height: 77px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  padding-left: 34px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  color: white;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34px;
  margin-top: 20px;
  gap: 17px;
`;
const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Title = styled.span`
  font-weight: 600;
  font-size: 22px;
  color: ${PointColor};
`;
const Input = styled.input`
  width: 452px;
  height: 44px;
  border: none;
  outline: none;
  background: ${MainColor};
  border-radius: 12px;
  font-size: 20px;
  color: ${PointColor};
  padding: 0 10px;
  :focus{
    background: ${PointColor};
    color: white;
  }
`;
const LoginBtn = styled.button`
  width: 236px;
  height: 56px;
  color: white;
  font-weight: 600;
  font-size: 25px;
  border-radius: 20px;
  background: ${MainColor};
  border: none;
  margin-left: 156px;
  margin-top: 35px;
  :hover{
    background: ${PointColor};
  }
`;

export default Login;