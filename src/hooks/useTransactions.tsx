import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";

interface TransationProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

type TransationPropsInput = Omit<TransationProps, "id" | "createdAt">;

interface TransationProviderProps {
  children: ReactNode;
}

interface TransationContextData {
  transactions: TransationProps[];
  createNewTransaction: (transaction: TransationPropsInput) => Promise<void>;
}

const TransactionsContext = createContext<TransationContextData>(
  {} as TransationContextData
);

export function TransactionsProvider({ children }: TransationProviderProps) {
  const [transactions, setTransactions] = useState<TransationProps[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions))
      .catch((error) => console.log("erro", error));
  }, []);

  async function createNewTransaction(transactionInput: TransationPropsInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
