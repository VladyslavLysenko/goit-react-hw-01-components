import PropTypes from 'prop-types'; 
import { BsFillBrightnessHighFill, BsFillDashCircleFill } from "react-icons/bs";

import { FriendListUl,FriendListLi,Name, Avatar,StatusIconOnline, StatusIconOffline } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendListUl>
            {friends.map(friend => (
                <FriendListLi key={friend.id}>
                    <span className="status">{friend.isOnline ? <StatusIconOnline><BsFillBrightnessHighFill size='25' /><span>Online</span></StatusIconOnline> : <StatusIconOffline><BsFillDashCircleFill size='20' />  Offline</StatusIconOffline>} </span>
                    <Avatar src={friend.avatar} alt="User avatar" width="50" height="auto" />
                    <Name>{friend.name}</Name>
                </FriendListLi>
            )
            )}
        </FriendListUl>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }
        )
    )
}

