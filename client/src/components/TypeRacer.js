import React from 'react'
import {Redirect} from 'react-router-dom'
import CountDown from './CountDown'
import StartBtn from './StartBtn'
import socket from '../socketConfig'
import DisplayWords from './DisplayWords'
import Form from './Form'

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
            <Form isOpen={isOpen} isOver={isOver} gameID={_id}/>
            <CountDown />
            <StartBtn player={player} gameID={_id} />
        </div>
    )
}

export default TypeRacer
