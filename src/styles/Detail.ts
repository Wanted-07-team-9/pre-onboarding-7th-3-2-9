import styled from 'styled-components';

export const DetailLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailCard = styled.div`
  width: 100%;
  max-width: 400px;
  height: fit-content;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ul {
    margin: auto;
    width: 100%;
  }
  li {
    margin-left: -20px;
    width: 100%;
    border-bottom: 1px solid #aaa;
    padding: 10px 0px;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row-reverse;
  margin-top: 20px;
`;

export const EditButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  color: #fff;
  border-radius: 5px;
  background-color: #1891ff;
  cursor: pointer;
`;

export const EditSelectBox = styled.span`
  display: flex;
  align-items: center;
  gap: 30px;
`;
