import React from 'react';
import Contacts from './components/pages/Contacts';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <Contacts />
      </div>
    );
  }
}

export default App;
