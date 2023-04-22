import React from 'react';
import './App.css';
import Technologies from './components/Technologies/Technologies';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header title={'Header Title'}/>
      <Technologies value={'some Technologies'} />
    </div>
  );
}

export default App;
