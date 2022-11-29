import styled from 'styled-components';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px auto 15px auto;
  width: 300px;
  border: 1px solid grey;
  border-radius: 2%;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const DescriptionDiv = styled.div`
  padding: 10px 30px;
  text-align: center;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  border: 1px solid grey;
  margin-bottom: 20px;
  width:100%
`;
export const ProfileName = styled.p`
  text-align: center;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;
export const ProfileTag = styled.p`
  text-align: center;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;
export const ProfileLocation = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;
export const StatsUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: center;
  background-color: rgba(207, 202, 205, 0.8);
  border-top: 1px solid rgba(175, 174, 174, 0.8);
`;


export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 2 * 10px) / 3);
  padding-top: 20px;
  padding-bottom: 20px;
  :not(:last-child) {
 border-right: 1px solid rgba(175, 174, 174, 0.8);
`;

export const Label = styled.span`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export const Quantity = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;