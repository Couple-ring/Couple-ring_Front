import * as S from "./styles";
import { CoupleringLogo, Profile, List, Door, ClickProfile, ReviseIcon, Heart } from "../../assets";
import { getAccessToken } from "../../utils/Token";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header(): JSX.Element {
  return (
    <S.Container>
      <Link to="main">
        <img src={CoupleringLogo} />
      </Link>
      <Btns />
    </S.Container >
  );
};

function MyPgModal({ name, id }: { name: string, id: string }): JSX.Element {
  const [isDelete, setIsDelete] = useState<boolean>(false);

  return (
    <>
      <S.Box>
        <S.BoxHead>
          <>ME</>
          <img src={ReviseIcon} />
        </S.BoxHead>
        <S.Information>
          <S.MyAccount>
            <S.Me>
              <S.MyName>{name}</S.MyName>
              <S.MyId>{id}</S.MyId>
            </S.Me>
            <S.DeleteBtn onClick={() => setIsDelete(true)}>탈퇴</S.DeleteBtn>
          </S.MyAccount>
          <S.DateInfo>
            <S.DateWrapper>
              <S.Title>우리의 시작</S.Title>
              <S.Date>2022.06.16</S.Date>
            </S.DateWrapper>
            <img src={Heart} />
            <S.DateWrapper>
              <S.Title>사랑한지</S.Title>
              <S.Date>116일째</S.Date>
            </S.DateWrapper>
          </S.DateInfo>
        </S.Information>
      </S.Box>
      {isDelete && <DeleteAccountMd />}
    </>
  );
};

function Btns(): JSX.Element {
  const accessToken: string | null = getAccessToken();
  const [isClickProfile, setIsClickProfile] = useState<boolean>(false);

  return (
    <>
      {accessToken ?
        (
          <S.Btn>
            <img
              onClick={() => setIsClickProfile(!isClickProfile)}
              src={isClickProfile ? ClickProfile : Profile} />
            <Link to="/history">
              <img src={List} />
            </Link>
            <img src={Door} />
            {isClickProfile && <MyPgModal name={"안윤지"} id={"inung1004"} />}
          </S.Btn>
        ) :
        (
          <S.Btn>
            <Link to="/login">
              <span>로그인</span>
            </Link>
            <Link to="/signup">
              <span> 회원가입</span>
            </Link>
          </S.Btn>
        )
      }
    </>
  );
};

function DeleteAccountMd(): JSX.Element {
  return (
    <S.Background>
      <S.AccountBox>

      </S.AccountBox>
    </S.Background>
  );
};

export default Header;