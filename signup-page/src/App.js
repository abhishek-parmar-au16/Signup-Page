import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user , setLoginuser] = useState({})
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/">
        {
          user && user.id
          ?
          <Homepage />
          :
          <Login setLoginuser={setLoginuser} />
        }
        </Route>
        <Route path="/login">
          <Login setLoginuser={setLoginuser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
