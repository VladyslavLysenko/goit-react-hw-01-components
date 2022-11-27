export const TransactionItem = ({ transaction:{type, amount, currency} }) => { 
    return (
       <>
            <td>{ type }</td>
            <td>{ amount }</td>
            <td>{ currency }</td>
    </> 
    )
} 


  