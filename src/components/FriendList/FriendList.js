import PropTypes from 'prop-types';
import { FriendListUl, FriendListLi} from './FriendList.styled';
import { FriendItem } from 'components/FriendItem/FriendItem';

export const FriendList = ({ friends }) => {

    return (
        <FriendListUl>
            {friends.map(({id,isOnline,avatar,name}) => (
                <FriendListLi key={id}>
               
                    <FriendItem
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                        />
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

