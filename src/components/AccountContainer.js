import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ allTransactions }) {

  // State for all transactions
  const [transactions, setTransactions] = useState(allTransactions)
  // console.log(transactions)

  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transactionsData={transactions} />
    </div>
  );
}

export default AccountContainer;
