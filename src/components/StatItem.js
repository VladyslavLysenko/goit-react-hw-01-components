import PropTypes from 'prop-types'; 
export const StatItem = ({ data: { label, percentage } }) => { 

  return( <section className="statistics">
  
      <span className="label"> {label} </span>
      <span className="percentage"> {percentage }%</span>
   
</section>)
};
StatItem.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired
}