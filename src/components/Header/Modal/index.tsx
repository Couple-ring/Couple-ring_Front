import * as S from "./styles";
import { useState, useEffect } from "react";
import { getAccessToken, tokenReissue } from "../../../utils/Token";
import axios from "axios";
import { Heart, ReviseIcon } from "../../../assets";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const MyPageModal = ({
  setIsDelete,
}: {
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [day, setDay] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const getMyInfo = async () => {
    const access_token = getAccessToken();
    await axios
      .get(`${BASE_URL}/auth/mypage`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        setName(res.data.name);
        setId(res.data.accountId);
        setStartDate(res.data.startDate);
        setDay(res.data.day);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          tokenReissue()
            .then(() => {
              getMyInfo();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  useEffect(() => {
    getMyInfo();
  }, [isClicked]);

  return (
    <>
      {isClicked ? (
        <ReviseMyProfile
          day={day}
          id={id}
          name={name}
          startDate={startDate}
          setIsClicked={setIsClicked}
        />
      ) : (
        <S.Box>
          <S.BoxHead>
            <>ME</>
            <img onClick={() => setIsClicked(!isClicked)} src={ReviseIcon} />
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
      )}
    </>
  );
};

const ReviseMyProfile = ({
  day,
  id,
  name,
  startDate,
  setIsClicked,
}: {
  day: number;
  id: string;
  name: string;
  startDate: string;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const access_token = getAccessToken();
  const [editName, setEditName] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(e.target.value);
  };
  const ReviseMyName = async () => {
    if (editName == "") {
      await axios
        .patch(
          `${BASE_URL}/auth/mypage`,
          {
            name: name,
          },
          {
            headers: { Authorization: `Bearer ${access_token}` },
          }
        )
        .then(() => {
          setIsClicked(false);
        });
    } else {
      await axios
        .patch(
          `${BASE_URL}/auth/mypage`,
          {
            name: editName,
          },
          {
            headers: { Authorization: `Bearer ${access_token}` },
          }
        )
        .then(() => {
          alert("이름이 수정되었습니다.");
          setIsClicked(false);
        });
    }
  };

  return (
    <S.Box>
      <S.BoxHead>
        <div>ME</div>
        <S.EditBtn onClick={ReviseMyName}>수정</S.EditBtn>
      </S.BoxHead>
      <S.Information>
        <S.MyAccount>
          <S.Me>
            <S.NameInput onChange={onChange} placeholder={name} />
            <S.MyId>{id}</S.MyId>
          </S.Me>
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
  );
};

export default MyPageModal;
