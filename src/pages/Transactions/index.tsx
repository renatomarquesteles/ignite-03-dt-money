import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { Container, PriceHighlight, Table } from './styles';

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <Container>
        <Table>
          <tbody>
            <tr>
              <td width="50%">Website development</td>
              <td>
                <PriceHighlight variant="income">$ 12,000.00</PriceHighlight>
              </td>
              <td>IT</td>
              <td>04/13/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- $ 19.00</PriceHighlight>
              </td>
              <td>Food</td>
              <td>04/10/2022</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
