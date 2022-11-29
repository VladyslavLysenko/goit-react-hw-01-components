import PropTypes from 'prop-types'; 
import { Td } from "./TransactionItem.styled";
export const TransactionItem = ({ transaction: { type, amount, currency } }) => { 
    return (
       <>
            <Td>{ type }</Td>
            <Td>{ amount }</Td>
            <Td>{ currency }</Td>
    </> 
    )
} 

TransactionItem.propTypes = {
    transaction: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired
}