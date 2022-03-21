import logo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTranslationModal: () => void;
}

export function Header({ onOpenNewTranslationModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNewTranslationModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
