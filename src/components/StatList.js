import PropTypes from 'prop-types'; 
import { StatItem } from "./StatItem"

export const StatisticList = ({ data }) => {
    return (
        <>
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
            {data.map(item => (
                <li key={item.id} className="item">
                    <StatItem data={item} />
                    
                </li>
            )
            )}
           
            </ul>
        </>

    )
}

StatisticList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }
    )).isRequired
}