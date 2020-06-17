import React from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';

import Home from './react-components/Home'

class App extends React.Component {
  state = {
    currentUser: "",
    // May move later
    homeowners: [{userName:'user', password:'user'}],
    frontliners: [{userName:'user2', password:'user2'}],
    admins: [{userName:'admin', password:'admin'}]
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch> 
            <Route exact path='/' render={() => (<Home state={this.state}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
