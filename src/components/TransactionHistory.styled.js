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
  :nth-child(2n) {
    background-color: grey;
  }
`;
