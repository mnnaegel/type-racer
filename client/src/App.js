import React,{useEffect} from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from './history';
import GameMenu from './components/GameMenu';
import socket from './socketConfig'

function App() {
  useEffect(()=>{
    socket.on('test',msg=>{
      console.log(msg)
    })
  },[])
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={GameMenu} />
        </Switch>
      </Router>   
    </div>
     
  );
}

export default App;
