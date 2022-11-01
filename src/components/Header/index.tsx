import styled from "styled-components";
import { PointColor, COLOR } from "../../style";
import { CoupleringLogo, Profile, List, Door, ClickProfile, ReviseIcon, Heart } from "../../assets";
import { getAccessToken } from "../../utils/getAccessToken";
import { Link } from "react-router-dom";
import { useState } from "react";

function MyPgModal({ name, id }: { name: string, id: string }): JSX.Element {
  return (
    <Box>
      <BoxHead>
        <>ME</>
        <img src={ReviseIcon} />
      </BoxHead>
      <Information>
        <MyAccount>
          <Me>
            <MyName>{name}</MyName>
            <MyId>{id}</MyId>
          </Me>
          <DeleteBtn>탈퇴</DeleteBtn>
        </MyAccount>
        <DateInfo>
          <DateWrapper>
            <Title>우리의 시작</Title>
            <Date>2022.06.16</Date>
          </DateWrapper>
          <img src={Heart} />
          <DateWrapper>
            <Title>사랑한지</Title>
            <Date>116일째</Date>
          </DateWrapper>
        </DateInfo>
      </Information>
    </Box>
  );
};

function Btns(): JSX.Element {
  const accessToken: string | null = getAccessToken();
  const [isClickProfile, setIsClickProfile] = useState<boolean>(false);

  return (
    <>
      {accessToken ?
        (
          <Btn>
            <img
              onClick={() => setIsClickProfile(!isClickProfile)}
              src={isClickProfile ? ClickProfile : Profile} />
            <Link to="/history">
              <img src={List} />
            </Link>
            <img src={Door} />
            {isClickProfile && <MyPgModal name={"안윤지"} id={"inung1004"} />}
          </Btn>
        ) :
        (
          <Btn>
            <Link to="/login">
              <span>로그인</span>
            </Link>
            <Link to="/signup">
              <span> 회원가입</span>
            </Link>
          </Btn>
        )
      }
    </>
  );
};

function Header(): JSX.Element {
  return (
    <>
      <Container>
        <Link to="main">
          <img src={CoupleringLogo} />
        </Link>
        <Btns />
      </Container >
    </>
  )
};

const Container = styled.div`
  width: 100vw;
  height: 64px;
  background: ${PointColor};
  display: flex;
  img{
    width: 95px;
  }
  justify-content: space-around;
  align-items: center;
`;
const Btn = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 24px;
  gap: 40px;
  color: white;
  img{
    width: 40px;
  }
  >a{
    text-decoration: none;
    color: white;
    display: flex;
  }
`;
const Box = styled.div`
  width: 424px;
  height: 260px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: absolute;
  top: 100px;
  right: 300px;
  z-index: 2;
`;
const BoxHead = styled.div`
  width: calc(inherit - 68px);
  height: 60px;
  background: ${PointColor};
  border-radius: 20px 20px 0px 0px;
  padding: 0 34px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  color: white;
  justify-content: space-between;
  >img{
    width: 30px;
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin: 19px 30px;
  gap: 10px;
`;
const MyAccount = styled.div`
  display: flex;
  gap: 189px;
`;
const Me = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const MyName = styled.span`
  font-weight: 600;
  font-size: 28px;
  color: ${PointColor};
`;
const MyId = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: ${PointColor};
`;
const DeleteBtn = styled.button`
  width: 83px;
  height: 30px;
  border-radius: 12px;
  background: ${PointColor};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #FFFFFF;
  border: none;
  :hover{
    background: ${COLOR.red};
  }
`;
const DateInfo = styled.div`
  display: flex;
  color: black;
  >img{
    width: 23px;
  }
  gap: 60px;
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
`;
const Date = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

export default Header;