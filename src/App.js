import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Contacts from './components/pages/Contacts';
import About from './components/pages/About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path="/" component={Contacts}/>
        <Route exact path="/About" component={About} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
