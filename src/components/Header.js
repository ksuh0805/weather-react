import React from 'react';
import logo from '../logo.svg';

// es5 function
// function Header( props ){
// const Header = (props) => {
  const Header = ({cityName}) => {
  // console.log( props );
  // console.log( props.cityName );

  // const cityName = props.cityName; // es5
  // const {cityName} = props; // es6

  return(
    <header className="App-header">
      <div>{cityName}</div>
     <img src={logo} className="App-logo" alt="logo" />
     <p>
      Edit <code>src/App.js</code> and save to reload.
     </p>
     <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
     >
      Learn React
     </a>
    </header>
  );
}

export default Header;