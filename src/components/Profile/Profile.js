import PropTypes from 'prop-types'; 
import { DescriptionDiv, ProfileDiv, AvatarImg, ProfileName, ProfileTag, ProfileLocation, StatsUl,Item, Label, Quantity } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return <ProfileDiv>
    <DescriptionDiv>
      <AvatarImg src={avatar} alt={username} />
      <ProfileName>{username}</ProfileName>
      <ProfileTag>@{tag}</ProfileTag>
      <ProfileLocation>{location}</ProfileLocation>
    </DescriptionDiv>
    
    <StatsUl>
      <Item>
        <Label>Followers</Label>
        <Quantity> {followers}</Quantity>
      </Item>
      
      <Item>
        <Label>Views</Label>
        <Quantity> {views}</Quantity>
      </Item>
      
      <Item>
        <Label>Likes </Label>
        <Quantity>{likes}</Quantity>
      </Item>
    </StatsUl>
  </ProfileDiv>
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers:PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
  }),
};