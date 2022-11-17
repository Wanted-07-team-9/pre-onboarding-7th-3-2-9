import React, { useState } from 'react';
import * as S from '../../../styles/Detail';
import DetailEdit from './DetailEdit';

function Detail({ detailData }) {
  const [editMode, setEditMode] = useState(false);
  const [filterSubmit, onFilterSubmit] = useState('');
  console.log(detailData);

  console.log(filterSubmit);

  const onEditHandler = () => {
    setEditMode(!editMode);
  };

  return (
    <S.DetailLayout>
      <S.DetailCard>
        <div>
          <p> 고객명: {detailData?.user_id} </p>
          <p> 증권사: {detailData?.broker_id}</p>
          <p> 입금금액: {detailData?.payments}</p>
          <p> 평가금액: {detailData?.assets}</p>
        </div>
        <div>
          <p> 계좌상태: {detailData?.status}</p>
          <p>
            {' '}
            계좌 활성화 여부:{' '}
            {!editMode ? (
              detailData?.is_active
            ) : (
              <DetailEdit onFilterSubmit={onFilterSubmit} />
            )}{' '}
          </p>
          <p> 계좌명: {detailData?.name}</p>
          <p> 계좌번호: {detailData?.number}</p>
          <p> 수정일: {detailData?.updated_at}</p>
        </div>
        {!editMode ? (
          <S.EditButton onClick={onEditHandler}> 수정 </S.EditButton>
        ) : (
          <>
            <S.EditButton> 완료 </S.EditButton>
            <S.EditButton onClick={onEditHandler}> 취소 </S.EditButton>
          </>
        )}
      </S.DetailCard>
    </S.DetailLayout>
  );
}

export default Detail;
