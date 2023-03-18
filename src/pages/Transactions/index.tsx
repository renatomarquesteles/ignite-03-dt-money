import { useContext } from 'react';

import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { SearchForm } from './components/SearchForm';

import { Container, PriceHighlight, Table } from './styles';

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <Container>
        <SearchForm />

        <Table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    $ {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
