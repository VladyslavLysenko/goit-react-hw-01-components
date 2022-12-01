import PropTypes from 'prop-types'; 
import { StatList, Item, StatListWrap, StatTitle,Label,Percentage } from './StatList.styled'

export const StatisticList = ({ data }) => {
    return (
        <StatListWrap>
            <StatTitle>Upload stats</StatTitle>
            <StatList>
                {data.map(item => (<Item key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
                    <Label> {item.label} </Label>
                    <Percentage> {item.percentage}%</Percentage>
                </Item>
                )
                )}
            </StatList>
        </StatListWrap>
    )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatisticList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }
        )).isRequired
}


