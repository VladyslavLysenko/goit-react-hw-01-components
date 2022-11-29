import PropTypes from 'prop-types'; 
import { Name, Avatar,StatusIconOnline, StatusIconOffline } from './FriendItem.styled'
import { BsFillBrightnessHighFill, BsFillDashCircleFill } from "react-icons/bs";
export const FriendItem = ({ friend: {isOnline, avatar, name } }) => { 


    return (
        <>
            <span className="status">{isOnline ? <StatusIconOnline><BsFillBrightnessHighFill size='25'/><span>Online</span></StatusIconOnline> : <StatusIconOffline><BsFillDashCircleFill size='20'/>  Offline</StatusIconOffline>} </span>
            <Avatar src={avatar} alt="User avatar" width="50" height="auto" />
            <Name>{name}</Name>
        </>
    )
}


FriendItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
}