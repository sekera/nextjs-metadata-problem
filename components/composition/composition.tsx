"use server";
import React from 'react';

import CompositionProps from './composition-props';



const Main: React.FC<CompositionProps> = (props) => {




  return (
    <main className="glueo-composition-main">{props.main}</main>
  );
}





const Footer: React.FC<CompositionProps>= (props) => {
  return (
    <footer className="glueo-composition-footer">



    <nav className="glueo-composition-brandlinks">
          <a href="/" >Home</a> | 
          <a href="/about/" >About</a> | 
          <a href="/press-kit/" >Press kit</a> | 
          <a href="/help/" >Help</a> | 
          <a href="/terms/" >Terms</a> | 
          <a href="/privacy/" >Privacy</a>
    </nav>

  </footer>
  );
}

const  Composition: React.FC<CompositionProps> = (props) => {





  return (

        <div id="main-wrapper">
          <Main {...props}   />
          <Footer  {...props} />
        </div>

  )
}

export default Composition

