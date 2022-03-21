import Dashboard from "./components/dashboard";
import { useState } from "react";
import { Header } from "./components/header";
import NewTransactionModal from "./components/newtransactiomodal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export default function App() {
  const [isNewTransactionModaOpen, setIsNewTransactionModaOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModaOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModaOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTranslationModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModaOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
