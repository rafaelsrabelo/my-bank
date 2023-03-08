import { createContext, ReactNode, useCallback, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { api } from "../services/api";
import { useAuth } from "../hooks/useAuth";

interface TransactionProps {
  id: string;
  type: 'up' | 'down';
  amount: number;
  created_at: string;
  name: string;
}

interface TransactionsContextyType {
  transactions: TransactionProps[];
}

interface TransactoinsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionsContextyType)

export function TransactoinsProvider({ children }: TransactoinsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const { user } = useAuth();
  async function getTransactions(query?: string) {
    try {
      const response = await api.get(`/users/${user._id}/transactions`)
      setTransactions(response.data.transactions)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    getTransactions()
  }, [transactions]))

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}