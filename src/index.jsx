import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import FormInputs from './components/FormInputs';
import Effects from './components/Effects';

const App = () => {
  return (
    <div className="container">

      <Effects />



    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
