import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const AgeField = () => {
  const [age, setAge] = useState();

  return (
    <label>
      Zadej svůj věk {age}:
      <input
        type="text"
        value={age}
        onChange={(e) => { setAge(e.target.value)}}
      />
    </label>
  );
}

const Checkbox = () => {
  const [agreement, setAgreement] = useState(false);

  return (
    <label>
      Souhlasíš se vším {agreement ? 'ano' : 'ne'}:
      <input
        type="checkbox"
        checked={agreement}
        onChange={(e) => {setAgreement(e.target.checked)}}
      />
    </label>
  );
}



const App = () => {
  return (
    <div className="container">

      <AgeField />
      <Checkbox />

    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
