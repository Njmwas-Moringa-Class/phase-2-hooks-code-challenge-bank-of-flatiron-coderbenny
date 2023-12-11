import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ allTransactions }) {

  // State for all bank Transactions
  const [bankData, setBankData] = useState([])
  console.log(bankData)

  // Use effect for fetching data from the db
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => {
        setBankData(data)
      })
      .catch(error => {
        console.error("An error occurred while fetching data" + error)
      })
  }, [])

  // Function for adding data to the backend & Updating UI
  function addTransaction(newData) {
    fetch("http://localhost:8001/transactions", {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(newData)
    })
      .then(response => response.json())
      .then(data => {
        console.log("item added successfully", data)
        setBankData([...bankData, newData])
      })
  }



  return (
    <div>
      <Search />
      <AddTransactionForm handleNewTransaction={addTransaction} />
      <TransactionsList transactionsData={bankData} />
    </div>
  );
}

export default AccountContainer;
