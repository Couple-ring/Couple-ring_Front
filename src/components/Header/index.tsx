import * as S from "./styles";
import {
  CoupleringLogo,
  Profile,
  List,
  Door,
  ClickProfile,
  ReviseIcon,
  Heart,
  ClickSearchIcon,
  SearchIcon,
} from "../../assets";
import { getAccessToken } from "../../utils/Token";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { tokenReissue } from "../../utils/Token";
import MyPageModal from "./Modal";

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
      </S.Container>
      {isDelete && <DeleteAccountModal setIsDelete={setIsDelete} />}
      {isLogout && <LogoutModal setIsLogout={setIsLogout} />}
    </>
  );
};

interface CheckModalProps {
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogout: React.Dispatch<React.SetStateAction<boolean>>;
}

function Btns({ setIsDelete, setIsLogout }: CheckModalProps): JSX.Element {
  const accessToken: string | null = getAccessToken();
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isClickProfile, setIsClickProfile] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const naigate = useNavigate();

  const goDiary = () => {
    naigate(`/main/${date}`);
  };

  return (
    <>
      {accessToken ? (
        <S.Btn>
          {isClick && (
            <S.SearchInput
              type="date"
              onChange={(e) => setDate(e.target.value)}
              onKeyPress={goDiary}
            />
          )}
          <img src={ReviseIcon} onClick={() => naigate("/writing_diary")} />
          {isClick ? (
            <img onClick={() => setIsClick(false)} src={ClickSearchIcon} />
          ) : (
            <img onClick={() => setIsClick(true)} src={SearchIcon} />
          )}
          <img
            onClick={() => setIsClickProfile(!isClickProfile)}
            src={isClickProfile ? ClickProfile : Profile}
          />
          <img onClick={() => setIsLogout(true)} src={Door} />
          {isClickProfile && <MyPageModal setIsDelete={setIsDelete} />}
        </S.Btn>
      ) : (
        <S.Btn>
          <Link to="/login">
            <span>?????????</span>
          </Link>
          <Link to="/signup">
            <span> ????????????</span>
          </Link>
        </S.Btn>
      )}
    </>
  );
}

const DeleteAccountModal = ({
  setIsDelete,
}: {
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const access_token = getAccessToken();
  const navigate = useNavigate();

  const onDeleteAccount = async () => {
    await axios
      .delete(`${BASE_URL}/auth/resign`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then(() => {
        localStorage.removeItem("couple_ring_access_token");
        setIsDelete(false);
        navigate("/login");
        alert("????????? ?????????????????????.");
      });
  };

  return (
    <S.Background>
      <S.AccountBox>
        <S.AccountBoxHead>?????? ???????????????????</S.AccountBoxHead>
        <S.AccountBoxBtns>
          <S.AccountBoxBtn onClick={onDeleteAccount}>???</S.AccountBoxBtn>
          <S.AccountBoxBtn onClick={() => setIsDelete(false)}>
            ?????????
          </S.AccountBoxBtn>
        </S.AccountBoxBtns>
      </S.AccountBox>
    </S.Background>
  );
};

const LogoutModal = ({
  setIsLogout,
}: {
  setIsLogout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("couple_ring_access_token");
    setIsLogout(false);
    navigate("/login");
  };

  return (
    <S.Background>
      <S.AccountBox>
        <S.AccountBoxHead>???????????? ???????????????????</S.AccountBoxHead>
        <S.AccountBoxBtns>
          <S.AccountBoxBtn onClick={onLogout}>???</S.AccountBoxBtn>
          <S.AccountBoxBtn onClick={() => setIsLogout(false)}>
            ?????????
          </S.AccountBoxBtn>
        </S.AccountBoxBtns>
      </S.AccountBox>
    </S.Background>
  );
};

export default Header;
