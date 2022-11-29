import styled from 'styled-components';
export const StatList = styled.ul`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 500px;
  border: 1px solid gray;
  border-radius: 2%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Item = styled.li`
  padding: 20px;
  width: calc(100% / 5);
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border-radius:5px;

`;

export const StatTitle = styled.h2`
margin-bottom:10px;
color: rgba(86, 85, 86, 0.8);`

export const StatListWrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border: 1px solid grey;
width:550px;
height:auto;
margin: 50px auto;
padding-bottom:25px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

`