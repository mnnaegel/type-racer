import React,{useEffect,useState} from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from './history';
import GameMenu from './components/GameMenu';
import CreateGame from './components/createGame';
import JoinGame from './components/JoinGame'
import TypeRacer from './components/TypeRacer'
import socket from './socketConfig'

function App() {
  const [gameState, setGameState] = useState({_id:"",isOpen:false,players:[],words:[]})
  useEffect(()=>{
    socket.on('updateGame',(game)=>{
      console.log(game);
      setGameState(game)
    })
    return ()=>{
      socket.removeAllListeners()
    }
  },[])

  useEffect(()=>{
    if(gameState._id !== "")
      history.push(`/game/${gameState._id}`)
  },[gameState._id])
  
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={GameMenu} />
          <Route path="/game/create" component={CreateGame} />
          <Route path="/game/join" component={JoinGame} />
          <Route path="/game/:gameID" render={props=><TypeRacer {...props} gameState={gameState}/>} />
        </Switch>
      </Router>   
    </div>
     
  );
}

export default App;
