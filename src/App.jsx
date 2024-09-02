import Header from "./Component/Header.jsx";
import UserInput from "./Component/UserInput.jsx";
import Results from "./Component/Results.jsx";
import { useState } from "react";

function App() {
  const [userInput,setUserInput]=useState({
    initalInvestment : 1000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration:10
  });
  const inputIsValid = userInput.duration >=1;
  // handle change function that takes the input indentifier and uses
  // that as a string and we know which value to change to the new Vlaue
  
  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput, 
            [inputIdentifier]: +newValue
            //+ forces javascript to change the value into a number instead of a string
        };
    });
  }



  return (
    <>
      <Header/>
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please Input a duration greater than 0</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
   
  );
}

export default App
