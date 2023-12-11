import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ allTransactions }) {

  // State for all transactions
  const [transactions, setTransactions] = useState(allTransactions)


  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transactionData={transactions} />
    </div>
  );
}

export default AccountContainer;
