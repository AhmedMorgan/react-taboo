import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [component, setComponent] = useState(0);
  const [numberOfParticipants, setNumberOfParticipants] = useState("");
  const [numberOfWordsForEveryOne, setNumberOfWordsForEveryOne] = useState("");

  const CreateGame = () => {
    return <div>
      <div>
        Welcome to Taboo
      </div>
      <div>
        To start a new Game write the number of participants and the number of words for everyone then press Start Game
      </div>
      <label> number of participants</label>
      <input type="text" value={numberOfParticipants} onChange={ e => { setNumberOfParticipants(e.target.value); }}/>
      <br />
      <label> number of words</label>
      <input type="text" value={numberOfWordsForEveryOne} onChange={ e => { setNumberOfWordsForEveryOne(e.target.value); }}/>
      <br />
      <input type="submit" value="Start Game" disabled={numberOfParticipants === "" || numberOfWordsForEveryOne === ""} onClick={ () => {
        setComponent(component + 1);
      }}/>
    </div>
  }
  const WhichComponent = () => {
    if(component === 0){
      return <CreateGame />;
    }
    // else if (component === 1){
    //   return <WriteWords />;
    // }else if( component === 2){
    //   return <RunningGame />;
    // }
     else return <div></div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <WhichComponent />
      </header>
    </div>
  );
}

export default App;
