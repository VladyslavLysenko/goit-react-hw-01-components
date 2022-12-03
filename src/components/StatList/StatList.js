import PropTypes from 'prop-types'; 
import { StatList, Item, StatListWrap, StatTitle,Label,Percentage } from './StatList.styled'

export const StatisticList = ({ data, title }) => {
    return (
        <StatListWrap>
            {title && <StatTitle>{title}</StatTitle>}
            <StatList>
                {data.map(({id, label, percentage}) => (<Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
                    <Label> {label} </Label>
                    <Percentage> {percentage}%</Percentage>
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
        )).isRequired,
     title: PropTypes.string.isRequired,
}

