import styled from 'styled-components';

export const TableLaytout = styled.div`
  .table {
    margin: 20px 0;
  }
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
  }
  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  table tr:hover {
    background-color: #aaa;
    cursor: pointer;
  }
  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    font-size: 0.9rem;
    background-color: #1891ff;
    color: white;
  }
  button {
    cursor: pointer;
    margin: 5px;
    outline: none;
    border: none;
    color: #fff;
    border-radius: 5px;
    background-color: #1891ff;
  }
`;
