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
    const initialPlayer1State = null;
    const initialPlayer2State = null;
    const initialWinner = {name: "Anonymous"};
    const [player1State, setPlayer1State] = useState(initialPlayer1State);
    const [player2State, setPlayer2State] = useState(initialPlayer2State);
    const [gameState, setGameState] = useState({hasEnded: false});
    const [winner, setWinner]= useState(initialWinner);


    const ResetState = () => {
        setPlayer2State(null);
        setGameState({hasEnded: false});
    }
    
    const setRock = () => {
        setPlayer1State("rock");
        ResetState();
    }

    const setPaper = () => {
        setPlayer1State("paper");
        ResetState();
    }

    const setScissors = () => {
        setPlayer1State("scissors");
        ResetState();
    }

    const setRandom = () => {
        setPlayer1State(picks[getRandomInt(3)]);
        ResetState();
    }

    const GeneratePlayer2Pick = () => {
        setPlayer2State(picks[getRandomInt(3)]);
    }

    const DetermineWinner = () => {
        let winner;
        let gameEnded=false;
        if (player1State === "paper" && player2State === "rock"){
            winner="Player1";
            gameEnded = true;
        } else if (player1State === "scissors" && player2State === "paper"){
            winner="Player1";
            gameEnded = true;
        } else if (player1State === "rock" && player2State === "scissors"){
            winner="Player1";
            gameEnded = true;
        } else if (player1State === "rock" && player2State === "paper"){
            winner="Bot";
            gameEnded = true;
        } else if (player1State === "paper" && player2State === "scissors"){
            winner="Bot";
            gameEnded = true;
        } else if (player1State === "scissors" && player2State === "rock"){
            winner="Bot";
            gameEnded = true;
        } else if (player1State === player2State){
            winner="None";
            gameEnded = true;
        } else {
            winner="None";
            gameEnded = false;
        }
        setWinner({name:winner});
        setGameState({hasEnded:gameEnded});
    }

    useEffect(DetermineWinner, [player1State, player2State])

    const Picking = () => {
        return (
            <div className='spinner-box'>
                <div className='circle-box'>
                    <div className='circle-core'>
                        <div className='result'>
                                Picking
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const DisplayMessage = () => {
        return (
            <div className='spinner-box'>
                <div className='static-circle-box'>
                    <div className='circle-core'>
                        <div className='result'>
                                { 
                                    winner.name === "Player1" ? (
                                        "You Win!"
                                    ) : winner.name === "Bot" ? (
                                        "You Lost!"
                                    ) : (
                                        "Draw!"
                                    )
                                }
                        </div>
                    </div>
                </div>
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
                        <img className='unknown' src={what} alt='not found'/>
                    )
                }
            </div>
        )
    }

    return(
        <div className='janken-game'>
            <h1 className='janken-header'>Rock Paper Scissors</h1>
            <div className='janken-game-contents'>
                <div className='p1'>
                    <div className='p1-box'>
                        Player1: {player1State}
                        <DisplayPick pick={player1State} />
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
                        Bot: {player2State}
                        <DisplayPick pick={player2State} />
                    </div>
                </div>
                <div className='button-submit'>
                    <button id='submit' onClick={GeneratePlayer2Pick}>Submit</button>
                </div>
            </div>
            <div>
                {
                    !gameState.hasEnded ? (
                        <Picking />
                    ) : (
                        <DisplayMessage />
                    )
                }
            </div>
        </div>
    )
}

export default Game