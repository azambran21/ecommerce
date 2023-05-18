import React from "react";
import {HomeButton, AccountButton, ShoppingCartButton} from './RedirectButtons';
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav >
      <div className="flex flex-row justify-between text-xl p-4">
        <HomeButton />
        <SearchBar />
        <div>
          <AccountButton />
          <ShoppingCartButton />
        </div>
        
      </div>
    </nav>
  )
};

export default Navbar;