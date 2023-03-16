import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

import { Card, Container } from './styles';

export const Summary = () => {
  return (
    <Container>
      <Card>
        <header>
          <span>Inflows</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>$ 17,400.00</strong>
      </Card>

      <Card>
        <header>
          <span>Outflows</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>$ 1,259.00</strong>
      </Card>

      <Card variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>$ 16,141.00</strong>
      </Card>
    </Container>
  );
};
