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
                {transactions.map(transaction => (
                    <Tr key={transaction.id}>
                    <Td>{ transaction.type }</Td>
                    <Td>{ transaction.amount }</Td>
                    <Td>{ transaction.currency }</Td>
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