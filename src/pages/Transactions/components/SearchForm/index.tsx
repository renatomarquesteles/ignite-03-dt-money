import { MagnifyingGlass } from 'phosphor-react';
import { Container } from './styles';

export const SearchForm = () => {
  return (
    <Container>
      <input type="text" placeholder="Search transactions" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </Container>
  );
};
