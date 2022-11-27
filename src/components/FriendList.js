// import PropTypes from 'prop-types'; 
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
    return (
        <>
            <ul className="friend-list">
                {friends.map(friend => (
                    <li key={friend.id}> className ="friend"
                        <FriendItem friend={friend} />
                    </li>
                ))}
            </ul>
        </>
    )
}