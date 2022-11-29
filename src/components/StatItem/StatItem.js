import PropTypes from 'prop-types'; 
import { Label,Percentage } from './StatItem.styled';
export const StatItem = ({ data: { label, percentage } }) => { 

  return( <section className="statistics">
  
      <Label> {label} </Label>
      <Percentage> {percentage }%</Percentage>
   
</section>)
};
StatItem.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired
}