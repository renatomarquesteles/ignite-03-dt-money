import { memo } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import * as z from 'zod';

import { TransactionsContext } from '../../../../contexts/TransactionsContext';

import { Container } from './styles';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

const SearchFormComponent = () => {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions
  );
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearch = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query);
  };

  return (
    <Container onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Search transactions"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </Container>
  );
};

export const SearchForm = memo(SearchFormComponent);
