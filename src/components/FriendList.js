import PropTypes from 'prop-types'; 
import { FriendItem } from './FriendItem';
import { FriendListUl,FriendListLi } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <>
            <FriendListUl>
                {friends.map(friend => (
                    <FriendListLi key={friend.id}> 
                        <FriendItem friend={friend} />
                    </FriendListLi>
                ))}
            </FriendListUl>
        </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

