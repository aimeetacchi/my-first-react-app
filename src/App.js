import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contacts from './components/pages/Contacts';
import About from './components/pages/About';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <h1>My React App</h1>
        <Switch>
        <Route exact path='/' component={Contacts}/>
        <Route exact path='/About' component={About} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
