import './App.css';
import { useState } from 'react';

const App = () => {
  const [stateNumber, setState] = useState(0, []);
  const [header1, setHeader1] = useState("Enter your name", []);
  const [input1, setInput1] = useState("", []);
  const [header2, setHeader2] = useState("", []);
  const [input2, setInput2] = useState("", []);
  const [header3, setHeader3] = useState("", []);
  const [input3, setInput3] = useState("", []);
  const [header4, setHeader4] = useState("", []);
  const [input4, setInput4] = useState("", []);



  const changeHeader1 = () => {
    if (input1.length > 10) {
      setHeader1("Your name is too long!");
    }

    else if (input1.length < 3) {
      setHeader1("Your name is too short!");
    }

    else {
      setHeader2("Welcome " + input1 + ". " + "Choose your planet (There are 4 planets (1,2,3,4))");
      console.log("The input length is ", input1.length);
      changeStateNumber(1);
    }
  }

  const changeInput1 = (event) => {
    setInput1(event.target.value);
  }

  const changeHeader2 = () => {
    
    changeStateNumber(2);
    setHeader3("Guess a number from (1000 - 2500)");
  }

  const changeInput2 = (event) => {
    setInput2(event.target.value);
  }
 
  const changeHeader3 = () => {
    setHeader4("");
    changeStateNumber(3);
  }

  const changeInput3 = (event) => {
    setInput3(event.target.value);
  }
  const changeHeader4 = () => {
    setHeader4("Welcome " + input1 + ". " + "Choose your planet (There are 4 planets (1,2,3,4))");
   
  }

  const changeInput4 = (event) => {
    setInput4(event.target.value);
  }
  const changeStateNumber = (number) => {
    setState(number)

  }


  {
    if (stateNumber == 0) {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Galaxy Planets
            </p>
            <div className="mainDiv">
              <p className='paraGraph' id="demo">{header1}</p>     
              <input className='inputOne' type="text" id="input1" value={input1} onChange={changeInput1} placeholder="Enter your name" />
              <button className='buttonClick' id="click1" onClick={changeHeader1}>check</button>
            </div>
          </header>
        </div>    
      );
    }

    if (stateNumber == 1) {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Galaxy Planets
            </p>
            <div className="mainDiv">
              <p className='paraGraph' id="demo">{header2}</p>     
              <input className='inputOne' type="text" id="input1" value={input2} onChange={changeInput2} placeholder="Choose your planet" />
              <button className='buttonClick' id="click1" onClick={changeHeader2}>check</button>
            </div>
          </header>
        </div>    
      );
    }

    if (stateNumber == 2) {
      return (
        <div className="App">
        <header className="App-header">
          <p>
            Galaxy Planets
          </p>
          <div className="mainDiv">
            <p className='paraGraph' id="demo">{header3}</p>     
            <input className='inputOne' type="text" id="input1" value={input3} onChange={changeInput3} placeholder="Guess a number" />
            <button className='buttonClick' id="click1" onClick={changeHeader3}>check</button>
          </div>
        </header>
      </div>    
      );
    }
    if (stateNumber == 3) {
      return (
        <div className="App">
        <header className="App-header">
          <p>
            Galaxy Planets
          </p>
          <div className="mainDiv">
            <p className='paraGraph' id="demo">{header4}</p>     
            <input className='inputOne' type="text" id="input1" value={input4} onChange={changeInput4} placeholder="Guess a number" />
            <button className='buttonClick' id="click1" onClick={changeHeader4}>check</button>
          </div>
        </header>
      </div>    
      );
    }
  }
}

export default App;
