import PropTypes from 'prop-types'; 
import { Name, Avatar} from './FriendItem.styled'
export const FriendItem = ({ friend: {isOnline, avatar, name } }) => { 


    return (
        <>
            <span className="status">{isOnline ? <span>Yes</span> : <span>No</span>} </span>
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