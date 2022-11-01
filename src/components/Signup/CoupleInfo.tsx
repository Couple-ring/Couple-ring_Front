import styled from "styled-components";
import { MainColor, PointColor } from "../../style";

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

export default CoupleInfo;