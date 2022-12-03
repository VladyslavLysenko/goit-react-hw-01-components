import PropTypes from 'prop-types'; 
import { Table,Th,Tr,Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </Tr>
            </thead>

            <tbody>
                {transactions.map(({id,type,amount,currency}) => (
                    <Tr key={id}>
                    <Td>{ type }</Td>
                    <Td>{ amount }</Td>
                    <Td>{ currency }</Td>
                    </Tr>
                ))
                }
            </tbody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }
    )).isRequired
}