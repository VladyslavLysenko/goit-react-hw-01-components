import PropTypes from 'prop-types'; 
import { DescriptionDiv, ProfileDiv, AvatarImg, ProfileName, ProfileTag, ProfileLocation, StatsUl,Item, Label, Quantity } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => { 
  return <ProfileDiv>
   
  <DescriptionDiv>
    <AvatarImg
      src={avatar}
        alt={username}
      
    />
    <ProfileName>{username}</ProfileName>
    <ProfileTag>@{tag}</ProfileTag>
    <ProfileLocation>{location}</ProfileLocation>
  </DescriptionDiv>

  <StatsUl>
    <Item>
      <Label>Followers</Label>
      <Quantity> {stats.followers}</Quantity>
    </Item>
    <Item>
                <Label>Views</Label>
      <Quantity> {stats.views}</Quantity>
    </Item>
    <Item>
      <Label>Likes </Label>
      <Quantity>{stats.likes}</Quantity>
    </Item>
  </StatsUl>
</ProfileDiv>
}; 

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};