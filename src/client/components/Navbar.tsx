import React from "react";
import {HomeButton, AccountButton, ShoppingCartButton} from './RedirectButtons';
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav >
      <div className="flex flex-row justify-between text-xl">
        <HomeButton />
        <SearchBar />
        <AccountButton />
        <ShoppingCartButton />
      </div>
    </nav>
  )
};

export default Navbar;