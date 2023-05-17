import React from "react";



const SearchBar = () => {
  return (
    <form>
      <div>
        <input name = "searchform" type = "search" placeholder="Search Products"></input>
      </div>
      <div>
        <button type = "submit">Search</button>
      </div>
    </form>
  )
};

export default SearchBar;