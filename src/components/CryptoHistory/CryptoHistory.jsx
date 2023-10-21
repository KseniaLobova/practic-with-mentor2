import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { format } from 'date-fns'

export const CryptoHistory = (props) => {
  return <div>
    <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

  <tbody>
    {props.items.map(({id,price,amount,date}) =>{
   const dates = format(new Date(date), "yyyy.MM.dd G 'at' HH:mm:ss zzz")
   return( <Tr key={id}>
      <Td>{id}</Td>
      <Td>{price}</Td>
      <Td>{amount}</Td>
      <Td>{dates}</Td>
    </Tr>)
    }
    )}
  </tbody>
</BaseTable>
  </div>;
};
