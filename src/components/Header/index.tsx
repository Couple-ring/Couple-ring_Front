import styled from "styled-components";
import { PointColor } from "../../style";
import { CoupleringLogo, Profile, List, Door, ClickProfile } from "../../assets";
import { getAccessToken } from "../../utils/getAccessToken";
import { Link } from "react-router-dom";
import { useState } from "react";

function Btns(): JSX.Element {
  const accessToken: string | null = getAccessToken();
  const [isClickProfile, setIsClickProfile] = useState<boolean>(false);

  return (
    <>
      {!accessToken ?
        (
          <Btn>
            <img
              onClick={() => setIsClickProfile(!isClickProfile)}
              src={isClickProfile ? ClickProfile : Profile} />
            <img src={List} />
            <img src={Door} />
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
    <Container>
      <Link to="main">
        <img src={CoupleringLogo} />
      </Link>
      <Btns />
    </Container >
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
  }
`;

export default Header;
