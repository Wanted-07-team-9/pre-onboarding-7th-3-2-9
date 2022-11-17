import styled from 'styled-components';

export const DetailLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailCard = styled.div`
  width: 500px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  display: flex;
  gap: 30px;
`;

export const EditButton = styled.button`
  width: 80px;
  height: 30px;
  margin-top: 160px;
  margin-right: 10px;
  border: none;
  color: #fff;
  border-radius: 5px;
  background-color: #1891ff;
  cursor: pointer;
`;
