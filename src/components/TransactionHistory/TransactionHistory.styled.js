import styled from 'styled-components';

export const Table = styled.table`
    width: 500px;
    margin: 0 auto;
    background-color: rgb(248, 248, 246); 
    margin-bottom:20px;
    th {
    background-color: rgba(9, 173, 243, 0.8);
    color: aliceblue;
    `;

export const Th = styled.th`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
`;

export const Tr = styled.tr`
  text-align: center;
  background-color: white;
  :nth-child(2n) {
    background-color: rgb(232, 236, 235);
  }
`;

export const Td = styled.td`
  height: 30px;
  font-size: 20px;
  font-weight: 400;
  text-align:center;
  border-bottom:2px solid white;
  border-right:2px solid white;


`;