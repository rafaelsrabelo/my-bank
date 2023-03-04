import { createContext, ReactNode, useCallback, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { api } from "../services/api";

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
  
  async function getTransactions() {
    try {
      const response = await api.get('/transactions')
      setTransactions(response.data.transctionsList)
    } catch (error) {
      console.log('Ops! Ocorreu um erro!')
    }
  }

  useFocusEffect(useCallback(() => {
    getTransactions()
  }, []))

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}