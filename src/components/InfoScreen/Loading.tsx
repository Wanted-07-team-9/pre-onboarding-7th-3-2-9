import styled from "styled-components"
import { Oval, Comment } from 'react-loader-spinner'
import React from "react"
import type { IStatus } from "../../types/interfaces"

const Loading = ({ status }: IStatus) => {
  return (
    <React.Fragment>
      {status === 'loading' && <LoadingLayout>
        <Oval
          height={80}
          width={80}
          color="#5160EA"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#468FF7"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <div>로딩 중입니다.</div>
      </LoadingLayout>}
      {status === 'error' && <LoadingLayout>
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
        <div>
          다시 한번 확인 해주시기 바랍니다.
        </div></LoadingLayout>}
      {status === 'empty' && <LoadingLayout>불러올 데이터가 없습니다</LoadingLayout>}
    </React.Fragment>
  )
}

const LoadingLayout = styled.section`
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
  font-size: 5rem;
  height:80vh;
  flex-direction:column;
  div{
    margin-top: 5%;
  }
`


export default Loading

