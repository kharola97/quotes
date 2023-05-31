import React, { useState, useEffect } from "react";

import './App.css';
import quotes from './Components/Quotes';

function App() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * (quotes.length - 1 - 0 + 1)) + 0);


  // const randomNumber = Math.floor(Math.random() * (quotes.length-1 - 0 + 1)) + 0
  const handleQuote = ()=>{
    setRandomNumber(Math.floor(Math.random() * (quotes.length - 1 - 0 + 1)) + 0);

  }
  return(
    <>
    <div className="content">
    <div className="header"> Quote of the day </div>
    <div className="quote">
     {quotes[randomNumber]}
   
    </div>
    </div>
    <button onClick={handleQuote}>New Quote</button>
    </>
  )
}

export default App;