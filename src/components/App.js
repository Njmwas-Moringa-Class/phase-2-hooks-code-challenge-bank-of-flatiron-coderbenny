import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {

  // State for the data fetched from the db
  const [bankData, setBankData] = useState()
  // console.log(bankData)

  // useEffect for fetching the data 
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => setBankData(data))
  }, [])

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer allTransactions={bankData} />
    </div>
  );
}

export default App;
