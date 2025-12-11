import './App.css';
import GenderEmoji from './Components/GenderEmoji';
import Dropdown from './Components/Dropdown';
import { useState } from 'react';

function App() {

  const [selectedGender, setSelectedGender] = useState(null);

  const genderOptions = [
    { name: 'Man', code: 'M' },
    { name: 'Woman', code: 'F' },
    { name: 'Non-binary', code: 'NB' },
    { name: 'Agender', code: 'A' },
    { name: 'Genderqueer', code: 'GQ' },
    { name: 'Prefer not to say', code: 'PNTS' },
    { name: 'Other', code: 'O' }
  ];

  const makeUpdate = (e) => {
    console.log('Selected Gender:', e.value);
  };

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
      <body>
        <h2>Review and Use the examples for Gender Selection in Forms below</h2>
        <Dropdown options={genderOptions} onChange={setSelectedGender} />
      </body>
    </div>
  );
}

export default App;
