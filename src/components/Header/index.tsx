import logoImg from '../../assets/logo.svg';

import { Button, Container, Content } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <Button type="button">New transaction</Button>
      </Content>
    </Container>
  );
};
