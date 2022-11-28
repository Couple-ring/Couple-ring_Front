import * as S from "./styles";
import { CoupleringLogo, Profile, List, Door, ClickProfile, ReviseIcon, Heart } from "../../assets";
import { getAccessToken } from "../../utils/Token";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { tokenReissue } from "../../utils/Token";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Header = () => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isLogout, setIsLogout] = useState<boolean>(false);

  return (
    <>
      <S.Container>
        <Link to="main">
          <img src={CoupleringLogo} />
        </Link>
        <Btns setIsDelete={setIsDelete} setIsLogout={setIsLogout} />
      </S.Container >
      {isDelete && <DeleteAccountModal setIsDelete={setIsDelete} />}
      {isLogout && <LogoutModal setIsLogout={setIsLogout} />}
    </>
  );
};

interface CheckModalProps {
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogout: React.Dispatch<React.SetStateAction<boolean>>;
};

function Btns({ setIsDelete, setIsLogout }: CheckModalProps): JSX.Element {
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
            <img onClick={() => setIsLogout(true)} src={Door} />
            {isClickProfile && <MyPageModal setIsDelete={setIsDelete} />}
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

const MyPageModal = ({ setIsDelete }: { setIsDelete: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [day, setDay] = useState<number>(0);

  const getMyInfo = async () => {
    const access_token = getAccessToken();
    await axios.get(`${BASE_URL}/auth/mypage`,
      {
        headers: { Authorization: `Bearer ${access_token}` }
      }
    ).then((res) => {
      setName(res.data.name);
      setId(res.data.accountId);
      setStartDate(res.data.startDate);
      setDay(res.data.day);
    }).catch((error) => {
      if (error.response.status === 401) {
        tokenReissue()
          .then(() => {
            getMyInfo();
          }).catch((error) => {
            console.log(error);
          })
      };
    });
  };

  useEffect(() => {
    getMyInfo();
  }, []);

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
              <S.Date>{startDate}</S.Date>
            </S.DateWrapper>
            <img src={Heart} />
            <S.DateWrapper>
              <S.Title>사랑한지</S.Title>
              <S.Date>{day}일째</S.Date>
            </S.DateWrapper>
          </S.DateInfo>
        </S.Information>
      </S.Box>
    </>
  );
};

const DeleteAccountModal = ({ setIsDelete }: { setIsDelete: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const access_token = getAccessToken();
  const navigate = useNavigate();

  const onDeleteAccount = async () => {
    await axios.delete(`${BASE_URL}/auth/resign`,
      {
        headers: { Authorization: `Bearer ${access_token}` }
      }
    ).then(() => {
      localStorage.removeItem('couple_ring_access_token');
      alert("탈퇴가 완료되었습니다.");
      navigate('/login');
    });
  };

  return (
    <S.Background>
      <S.AccountBox>
        <S.AccountBoxHead>탈퇴 하시겠습니까?</S.AccountBoxHead>
        <S.AccountBoxBtns>
          <S.AccountBoxBtn onClick={onDeleteAccount}>예</S.AccountBoxBtn>
          <S.AccountBoxBtn onClick={() => setIsDelete(false)}>아니요</S.AccountBoxBtn>
        </S.AccountBoxBtns>
      </S.AccountBox>
    </S.Background >
  );
};

const LogoutModal = ({ setIsLogout }: { setIsLogout: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('couple_ring_access_token')
    setIsLogout(false);
    navigate('/login');
  };

  return (
    <S.Background>
      <S.AccountBox>
        <S.AccountBoxHead>로그아웃 하시겠습니까?</S.AccountBoxHead>
        <S.AccountBoxBtns>
          <S.AccountBoxBtn onClick={onLogout}>예</S.AccountBoxBtn>
          <S.AccountBoxBtn onClick={() => setIsLogout(false)}>아니요</S.AccountBoxBtn>
        </S.AccountBoxBtns>
      </S.AccountBox>
    </S.Background >
  );
};

export default Header;