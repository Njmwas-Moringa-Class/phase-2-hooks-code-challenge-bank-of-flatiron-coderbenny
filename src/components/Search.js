import React from "react";

function Search({ handleSearchText }) {

  // Function for handling search
  function handleSearch(event) {
    const searchText = event.target.value
    handleSearchText(searchText)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
