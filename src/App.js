import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Year20 from './components/years/2020';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/year' component={Year20} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
