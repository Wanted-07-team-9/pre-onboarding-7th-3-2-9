import React, { useEffect, useState } from 'react';
import * as S from '../../../styles/Detail';
import DetailEdit from './DetailEdit';

function Detail({ detailData }) {
  const [editMode, setEditMode] = useState(false);
  const [filterSubmit, onFilterSubmit] = useState('');
  console.log(detailData);

  console.log(filterSubmit);
  useEffect(() => {
    onFilterSubmit(detailData?.is_active);
  }, []);
  const onEditHandler = () => {
    setEditMode(!editMode);
  };

  return (
    <S.DetailLayout>
      <S.DetailCard>
        <ul>
          <li>고객명: {detailData?.user_id} </li>
          <li>증권사: {detailData?.broker_id}</li>
          <li>입금금액: {detailData?.payments}</li>
          <li>평가금액: {detailData?.assets}</li>

          <li> 계좌상태: {detailData?.status}</li>
          <li>
            <S.EditSelectBox>
              계좌 활성화 여부:
              {!editMode ? (
                detailData?.is_active
              ) : (
                <DetailEdit onFilterSubmit={onFilterSubmit} filterSubmit={filterSubmit} />
              )}
            </S.EditSelectBox>
          </li>
          <li> 계좌명: {detailData?.name}</li>
          <li> 계좌번호: {detailData?.number}</li>
          <li> 수정일: {detailData?.updated_at}</li>
        </ul>
        <S.ButtonBox>
          {!editMode ? (
            <S.EditButton onClick={onEditHandler}> 수정 </S.EditButton>
          ) : (
            <>
              <S.EditButton> 완료 </S.EditButton>
              <S.EditButton onClick={onEditHandler}> 취소 </S.EditButton>
            </>
          )}
        </S.ButtonBox>
      </S.DetailCard>
    </S.DetailLayout>
  );
}

export default Detail;
