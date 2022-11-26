export const StatItem = ({ data: {label,percentage} }) => { 

  return( <section className="statistics">
  
      <span className="label"> {label} </span>
      <span className="percentage"> {percentage }%</span>
   
</section>)
};