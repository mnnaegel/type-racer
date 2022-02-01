import React from 'react'
import {Redirect} from 'react-router-dom'
import CountDown from './CountDown'
import StartBtn from './StartBtn'
import socket from '../socketConfig'
import DisplayWords from './DisplayWords'
import ProgressBar from './ProgressBar'
import Form from './Form'
import ScoreBoard from './ScoreBoard'

const findPlayers = players => {
    return players.find(player => player.socketID===socket.id)
}

const TypeRacer = ({gameState}) => {
    const {_id,players,words, isOpen, isOver}=gameState
    const player = findPlayers(players)
    if (_id === ""){
        return <Redirect to="/" />
    }
    return (
        <div className="text-center">
            <DisplayWords words={words} player={player} />
            <ProgressBar players={players} player={player} wordsLength={words.length}/>
            <Form isOpen={isOpen} isOver={isOver} gameID={_id}/>
            <CountDown />
            <StartBtn player={player} gameID={_id} />
            <ScoreBoard players={players}/>
        </div>
    )
}

export default TypeRacer
