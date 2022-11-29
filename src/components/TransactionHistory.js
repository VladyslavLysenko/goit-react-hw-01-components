import PropTypes from 'prop-types'; 
import { Table,Th,Tr } from './TransactionHistory.styled';
import { TransactionItem } from "./TransactionItem";


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
                    <tr key={transaction.id}>
                        <TransactionItem transaction={transaction} />
                    </tr>
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
        }
    )).isRequired
}