import styled from 'styled-components';

export const FriendListUl = styled.ul`
display:flex;
flex-direction:column;
list-style: none;
align-items: center;

 `

export const FriendListLi = styled.li`
display:flex;
margin-bottom:20px;
border: 1px solid grey;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
width: 350px;
padding: 10px 5px;
gap:35px;
justify-content: center;
align-items: center;
border-radius:5px;
padding-left:15px;
padding-right:15px;

`
export const Name = styled.p`
font-size:25px;
font-weight:600;`

export const Avatar = styled.img`
background-size: contain;
border-radius: 5px;
border: 1px solid grey`

export const StatusIconOnline = styled.div`
color:green;
display:flex;
justify-content:center;
align-items:center;
gap:10px;
`

export const StatusIconOffline = styled.div`
color:red;
display:flex;
justify-content:center;
align-items:center;
gap:10px;
`
