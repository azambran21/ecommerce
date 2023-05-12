import React from 'react';
import {Link} from 'react-router-dom';

const HomeButton = () => {
    return(
        <Link to = '/'>
            <button>Home Button</button>
        </Link>
    )
}

const AccountButton = () => {
    return(
        <Link to = '/account'>
            <button>Account Button</button>
        </Link>
    )
}
const ShoppingCartButton = () => {
    return(
        <Link to = '/shoppingcart'>
            <button>Shopping Cart Button</button>
        </Link>
    )
}

export {HomeButton, AccountButton, ShoppingCartButton}