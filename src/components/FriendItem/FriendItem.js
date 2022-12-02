import PropTypes from 'prop-types';
import { Avatar, Name } from './FriendItem.styled';

export function FriendItem({ avatar, name,}) {
  return (
    <>
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