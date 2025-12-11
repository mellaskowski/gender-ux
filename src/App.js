import './App.css';
import GenderEmoji from './Components/GenderEmoji';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GenderEmoji />
        <h1>
          What's your Gender? 
        </h1>
          <p>Please select your gender from the options below, or specify your own. </p>
          <p>Never feel obligated to fill out this field on our or anyone's form. Your gender identity is fully yours.</p>
      </header>
    </div>
  );
}

export default App;
