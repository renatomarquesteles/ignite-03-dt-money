import { useContext } from 'react';

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

import { TransactionsContext } from '../../contexts/TransactionsContext';
import { priceFormatter } from '../../utils/formatter';

import { Card, Container } from './styles';

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.inflows += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outflows += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    { inflows: 0, outflows: 0, total: 0 }
  );

  return (
    <Container>
      <Card>
        <header>
          <span>Inflows</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.inflows)}</strong>
      </Card>

      <Card>
        <header>
          <span>Outflows</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outflows)}</strong>
      </Card>

      <Card variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </Card>
    </Container>
  );
};
