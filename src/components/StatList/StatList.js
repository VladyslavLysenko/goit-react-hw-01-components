import PropTypes from 'prop-types'; 
import { StatItem } from "../StatItem/StatItem"
import { StatList, Item, StatListWrap, StatTitle } from './StatList.styled'

export const StatisticList = ({ data }) => {
    return (
        <StatListWrap>
            <StatTitle>Upload stats</StatTitle>
            <StatList>
            {data.map(item => (
                <Item key={item.id} style={{ backgroundColor: getRandomHexColor() }}>>
                    <StatItem data={item} />
                    
                </Item>
            )
            )}
           
            </StatList>
        </StatListWrap>

    )
}

StatisticList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }
    )).isRequired
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}