import React from 'react'
import { useState } from 'react'
import './Home.css'



function Home() {
  const initialState = {items: [], isLoaded: false }
  const [state, setState] = useState(initialState)

  const ButtonClick = () => {
    setState({isLoaded: true, items: ["Back."]})
  }

  const ButtonUnclick = () => {
    setState({isLoaded: false, items: ["Next!"]})
  }

  

  return (

    <div className='home-contents'>
      <div className='home-middle'>
        <div className='home-image'>
          <h1>Image Here</h1>
        </div>
        
        <div className='home-details'>
          <div className='home-title'>
            <h2>Insert Title Here</h2>
          </div>
          <div className='home-body'>
            <p className='home-paragraph'>
              {
                !state.isLoaded ? (
                  <h3>Loading... {state.items[0]}</h3>
                ) : (
                  <h3>Loaded. {state.items[0]}</h3>
                )
              }
            </p>
          </div>
        </div>
      </div>

      <div className='home-buttons-container'>
        <div className='home-button back'>
          <button  id='home-back' onClick={ButtonClick}>Back</button>
        </div>
        <div className='home-button next'>
          <button id='home-next' onClick={ButtonUnclick}>Next</button>
        </div>
      </div>

      <div className='home-pagination'>
          <h4>Pages</h4>
      </div>
    </div>
  )
}

export default Home