import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Years from './components/year';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/year' component={Years} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
