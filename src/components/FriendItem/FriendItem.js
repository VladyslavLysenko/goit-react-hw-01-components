import PropTypes from 'prop-types';
import { Avatar, Name,StatusIconOnline,StatusIconOffline } from './FriendItem.styled';
import { BsFillBrightnessHighFill, BsFillDashCircleFill } from "react-icons/bs";
export function FriendItem({ avatar, name, isOnline}) {
  return (
    <>
      <span className="status">{isOnline
        ? <StatusIconOnline><BsFillBrightnessHighFill size='25' /><span>Online</span></StatusIconOnline>
        : <StatusIconOffline><BsFillDashCircleFill size='20' />  Offline</StatusIconOffline>} </span>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
}
FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};