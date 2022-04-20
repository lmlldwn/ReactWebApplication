import React from 'react'
import { useState } from 'react'

import './Joke.css'


function Joke() {
  const initialState = {items: [], isLoaded: false}
  const [state,setState] = useState(initialState);

  const getJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
      .then((res) => res.json())
      .then((json) => {
        setState({
          items: json,
          isLoaded: true
        })
      })
  }

  const DisplayJoke = () => {
    return (
        <div className='joke'>
          <label id='joke-setup'>{state.items.setup} </label> <br/>
          <label id='joke-delivery'>{state.items.delivery}</label> <br/>
          <div className='joke-spinner'>
            <label id='joke-emoji1'>🤣</label>
            <label id='joke-emoji1'>🤣</label>
            <label id='joke-emoji1'>🤣</label>
          </div>
        </div>
    )
  }
  return (
    <div className='joke-container'>
      <h1>Random Joke</h1>
      {
        !state.isLoaded ? (
          <h1>Click the button below to generate a joke</h1>
        ) : (
          <DisplayJoke />
        )
      }
      <div className='joke-generate'>
        <button id='button-joke' onClick={getJoke}>Generate joke</button>
      </div>
    </div>
  )
}

export default Joke