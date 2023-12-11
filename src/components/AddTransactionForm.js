import React, { useState } from "react";

function AddTransactionForm() {

  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  function handleDate(event) {
    setDate(event.target.value)
  }

  function handleDescription(event) {
    setDescription(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleAmount(event) {
    setAmount(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    }
    console.log(formData)
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input onChange={handleDate} type="date" name="date" value={date} />
          <input onChange={handleDescription} type="text" name="description" value={description} placeholder="Description" />
          <input onChange={handleCategory} type="text" name="category" value={category} placeholder="Category" />
          <input onChange={handleAmount} type="number" name="amount" value={amount} placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
