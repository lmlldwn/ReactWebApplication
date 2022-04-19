import React from 'react'
import { useState } from 'react'

import './Content.css'


function Content() {
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
            <label id='joke-emoji2'>🤣</label>
            <label id='joke-emoji3'>🤣</label>
          </div>
        </div>
    )
  }
  return (
    <div>
      <h1>Random Joke</h1>
      {
        !state.isLoaded ? (
          <h1>Click the button below to generate a joke</h1>
        ) : (
          <DisplayJoke />
        )
      }
      <button id='button-joke' onClick={getJoke}>Generate joke</button>
    </div>
  )
}

export default Content