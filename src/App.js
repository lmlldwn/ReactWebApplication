import './App.css';
import HomePage from './projects/HomePage';
import ContentPage from './projects/ContentPage';
import AboutPage from './projects/AboutPage';
import icon from './bin/RimuruTempest.png';
import {useState} from 'react';
import React from 'react';

// function NavigationBar() {
//   return(
//       <div className="navigation-bar">
//           <div className="nav-icon">
//               <img src={icon} alt="source not found" />
//           </div>
//           <div className="navigation-labels">
//               <label className="nav-home" onClick={HomePage}>Home</label>
//               <label className="nav-contents" onClick={ContentPage}>Contents</label>
//               <label className="nav-about">About</label>
//               <label className="nav-about" onClick={ShowAbout}>About</label>
//           </div>
//       </div>
//   )
// }

function App() {
  const StartPage = {name: "Content"};
  const [page, setPage] = useState(StartPage);


  const NavigationBar =  () => {
    return(
        <div className="navigation-bar">
            <div className="nav-icon">
                <img src={icon} alt="source not found" />
            </div>
            <div className="navigation-labels">
                <label className="nav-home" onClick={setPage({name:"Home"})}>Home</label>
                <label className="nav-contents" onClick={setPage({name:"Content"})}>Contents</label>
                <label className="nav-about" onClick={setPage({name:"About"})}>About</label>
                {/* <label className="nav-about" onClick={ShowAbout}>About</label> */}
            </div>
        </div>
    )
  }

  const SetDisplayPage = () => {

  }

  return (
    <div className="App">
      <NavigationBar />
      { page.name = "About" ? (
        <AboutPage />
        ) : page.name = "Content" ? (
          <ContentPage />
        ) : (
          <HomePage />
        )
       }
    </div>
  );
}

export default App;
