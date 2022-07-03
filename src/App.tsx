import React, { useState } from 'react';
import WhichComponent from './components/WhichComponent';
import logo from './logo.svg';
import './App.css';

function App() {
  const [component, setComponent] = useState(0);
  const [numberOfParticipants, setNumberOfParticipants] = useState("");
  const [numberOfWordsForEveryOne, setNumberOfWordsForEveryOne] = useState("");

  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <WhichComponent component={component} setComponent={setComponent} numberOfParticipant={numberOfParticipants} setNumberOfParticipants={setNumberOfParticipants} numberOfWordsForEveryOne={numberOfWordsForEveryOne} setNumberOfWordsForEveryOne={setNumberOfWordsForEveryOne}/>
      </header>
    </div>
  );
}

export default App;
