import './App.css';
import HomePage from './projects/HomePage';
//import ShowContents from './projects/Contents';
import icon from './bin/RimuruTempest.png'

function NavigationBar() {
  return(
      <div className="navigation-bar">
          
          <div className="nav-icon">
            <img src={icon} alt="source not found" />
          </div>
          <div className="navigation-labels">
              <label className="nav-home">Home</label>
              <label className="nav-contents">Contents</label>
              <label className="nav-about">About</label>
          </div>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
    </div>
  );
}

export default App;
