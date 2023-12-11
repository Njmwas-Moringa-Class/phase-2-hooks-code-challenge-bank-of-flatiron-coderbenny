import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ allTransactions }) {

  const [bankData, setBankData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => {
        setBankData(data)
        // setLoading(false)
        // console.log(bankData)
      })
      .catch(error => {
        console.error(error)
        // setError(error)
        // setLoading(false)
      })
  }, [])


  // State for all transactions
  // const [transactions, setTransactions] = useState(allTransactions)
  // console.log(allTransactions)

  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList transactionsData={bankData} />
    </div>
  );
}

export default AccountContainer;
