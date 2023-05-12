import React from 'react';
import Navbar from './Navbar';
import { PropsWithChildren } from 'react';

const Layout = ({children}: PropsWithChildren) =>{
    return(
        <>
          <Navbar/>
          {children}
        </>
    )
}

export default Layout;