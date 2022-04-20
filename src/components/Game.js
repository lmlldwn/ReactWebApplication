import React, { useEffect } from 'react'
import { useState } from 'react'

import './Game.css'

import rock from '../resources/rock.png'
import paper from '../resources/paper.png'
import scissors from '../resources/scissors.png'
import what from '../resources/what.png'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function Game() {
    const picks = ["rock", "paper", "scissors"];
    const initialPlayerState ={
        player1Pick: "rock",
        player2Pick: "rock"
    }
    const initialWinner = {name: "Anonymous"}

    const [playerState, setPlayerState] = useState(initialPlayerState);
    const [winner, setWinner]= useState(initialWinner);

    const setRock = () => {
        setPlayerState({
            player1Pick: "rock"});
    }

    const setPaper = () => {
        setPlayerState({
            player1Pick: "paper"});
    }

    const setScissors = () => {
        setPlayerState({
            player1Pick: "scissors"});
    }

    const setRandom = () => {
        setPlayerState({
            player1Pick: picks[getRandomInt(3)]});
    }

    const GeneratePlayer2Pick = () => {
        
        setPlayerState({
            player1Pick: playerState.player1Pick,
            player2Pick: picks[getRandomInt(3)]
        });

        
    }

    const DetermineWinner = () => {
        if (playerState.player1Pick === "paper" && playerState.player2Pick === "rock"){
            setWinner({name:"Player1"})
        } else if (playerState.player1Pick === "scissors" && playerState.player2Pick === "paper"){
            setWinner({name:"Player1"})
        } else if (playerState.player1Pick === "rock" && playerState.player2Pick === "scissors"){
            setWinner({name:"Player1"})
        } else if (playerState.player1Pick === "rock" && playerState.player2Pick === "paper"){
            setWinner({name:"Bot"})
        } else if (playerState.player1Pick === "paper" && playerState.player2Pick === "scissors"){
            setWinner({name:"Bot"})
        } else if (playerState.player1Pick === "scissors" && playerState.player2Pick === "rock"){
            setWinner({name:"Bot"})
        } else (
            setWinner({
                name: "It's a Tie!!!"
            })
        )
    }

    useEffect( 
        DetermineWinner
    ,[playerState])

    const ShowWinner = () => {
        return (
            <div className='result'>
                Winner: {winner.name}
            </div>
        )
    }


    const DisplayPick = (props) => {
        return(
            <div className='image-pick'>
                {
                    props.pick === "rock" ? (
                        <img className='rock' src={rock} alt='not found'/>
                    ) : props.pick === "paper" ? (
                        <img className='paper' src={paper} alt='not found'/>
                    ) : props.pick === "scissors" ? (
                        <img className='scissors' src={scissors} alt='not found'/>
                    ) : (
                        <img src={what} alt='not found'/>
                    )
                }
            </div>
        )
    }

    return(
        <div className='janken-game'>
            <h1>Rock Paper Scissors</h1>
            <div className='janken-game-contents'>
                <div className='p1'>
                    <div className='p1-box'>
                        Player1: {playerState.player1Pick}
                        {/* <DisplayPick pick={playerState.player1Pick} /> */}
                    </div>
                    <div className='p1-buttons'>
                        <button onClick={setRock}>Rock</button>
                        <button onClick={setPaper}>Paper</button>
                        <button onClick={setScissors}>Scissors</button>
                        <button onClick={setRandom}>Random</button>
                    </div>
                </div>
                <div className='p2'>
                    <div className='p2-box'>
                        Bot: {playerState.player2Pick}
                        {/* <DisplayPick pick={playerState.player2Pick} /> */}
                    </div>
                </div>
                <button onClick={GeneratePlayer2Pick}>Submit</button>
            </div>
            <ShowWinner />
        </div>
    )
}

export default Game