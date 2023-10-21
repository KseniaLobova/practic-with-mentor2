import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatDate } from 'helpers/formatDate';

export const CryptoHistory = ({ items }) => {
  return (
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
        {items.map(item => {
          return (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.price}</Td>
              <Td>{item.amount}</Td>
              <Td>{formatDate(item.date)}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};
