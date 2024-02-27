import './App.css';
import HeaderTop from './header.js';
import Cards from './Cards.js';
import TagButtons from './Button.js';

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <div style={{justifyContent: "center", display: "flex"}}>
       <div style={{display: "flex", width: "60%"}}>
        <div style={{width: "70%"}}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </div>

      <div style={{display: "flex", width: "30%"}}>
        <TagButtons></TagButtons>
      </div>

      </div>
    </div>
  </div>
  );
}

export default App;
