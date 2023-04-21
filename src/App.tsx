import React from 'react';
import './App.css';
import Technologies from './components/Technologies/Technologies';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header title={'HeaderTitle'}/>
      <Technologies value={'some technologies'} />
    </div>
  );
}

export default App;
