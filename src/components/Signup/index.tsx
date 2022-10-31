import styled from "styled-components";
import { MainColor, PointColor } from "../../style";
import { AuthType } from "../../inteface";
import { useState } from "react";

function SignupInputs(): JSX.Element {
  const Text: AuthType[] = [
    { title: "이름", type: "text" },
    { title: "아이디", type: "text" },
    { title: "비밀번호", type: "password" },
    { title: "비밀번호 확인", type: "password" },
    { title: "연애를 시작한 날짜", type: "date" },
  ];

  return (
    <Inputs>
      {Text.map((list) => (
        <SignupInput>
          <Title>{list.title}</Title>
          <Input type={list.type} />
        </SignupInput>
      ))}
    </Inputs>
  );
};

function CheckModal({ setInfo, setSignupCheck }: { setInfo: any, setSignupCheck: any }): JSX.Element {
  const GoCoupleInfo = () => {
    setInfo(true);
    setSignupCheck(false);
  }
  
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
};

function CoupleInfo(): JSX.Element {
  return (
    <Wrapper>
      <Head>회원가입</Head>
      <Inputs>
        <SignupInput>
          <Title>연인 아이디</Title>
          <Input />
        </SignupInput>
      </Inputs>
      <SignupBtn>완료</SignupBtn>
    </Wrapper>
  );
};

function MyInfo({ setSignupCheck }: { setSignupCheck: any }): JSX.Element {
  return (
    <Container>
      <Head>회원가입</Head>
      <SignupInputs />
      <SignupBtn onClick={() => (setSignupCheck(true))}>가입하기</SignupBtn>
    </Container>
  );
};

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

const Container = styled.div`
  width: 548px;
  height: 760px;
  background: #FFFFFF;
  border-radius: 20px;
  position: absolute;
  top: 54%;
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
  gap: 17px;
  margin-left: 34px;
  margin-top: 30px;
`;
const SignupInput = styled.div`
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
  color: white;
  padding: 0 10px;
  font-weight: 600;
  :focus{
    background: ${PointColor};
  }
`;
const SignupBtn = styled.button`
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
const Wrapper = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  position: absolute;
  width: 548px;
  height: 331px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Signup;