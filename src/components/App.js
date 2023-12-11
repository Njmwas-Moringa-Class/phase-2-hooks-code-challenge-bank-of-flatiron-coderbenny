import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {

  // State for the data fetched from the db
  // const [bankData, setBankData] = useState(null)

  // State for loading and the error
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)


  // useEffect for fetching the data 
  // useEffect(() => {
  //   fetch("http://localhost:8001/transactions")
  //     .then(response => response.json())
  //     .then(data => {
  //       setBankData(data)
  //       setLoading(false)
  //       // console.log(bankData)
  //     })
  //     .catch(error => {
  //       setError(error)
  //       setLoading(false)
  //     })
  // }, [])

  // Loading state change
  // if (loading) {
  //   return <p>Loading...</p>
  // }

  //Error state change
  // if (error) {
  //   console.error("Error fetching data!:", error)
  //   return <p>Error Loading Data. Please try again</p>
  // }

  // Conditional rendering for bank Data
  // if (bankData === undefined) {
  //   return null;
  // }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
