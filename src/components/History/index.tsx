import * as S from "./styles";
import { SearchIcon, ReviseIcon, ClickSearchIcon } from "../../assets";
import { useState } from "react";

function History(): JSX.Element {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Head>
        <S.Title>일기목록</S.Title>
        {isClick && <S.SearchInput type="date" />}
        <S.Btns>
          {isClick ? (
            <img onClick={() => setIsClick(false)} src={ClickSearchIcon} />
          ) : (
            <img onClick={() => setIsClick(true)} src={SearchIcon} />
          )}
          <img src={ReviseIcon} />
        </S.Btns>
      </S.Head>
      <S.Body>
        <S.MyList>
          <thead>
            <tr>
              <S.NO>No</S.NO>
              <S.ListTitle>날짜</S.ListTitle>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.Num>0</S.Num>
              <S.Post>sdf</S.Post>
            </tr>
          </tbody>
        </S.MyList>
        <S.Footer></S.Footer>
      </S.Body>
    </S.Container>
  );
}

export default History;
