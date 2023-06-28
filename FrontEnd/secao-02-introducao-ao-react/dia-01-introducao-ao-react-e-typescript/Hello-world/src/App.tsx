// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '../../../../../../../../../vite.svg';
// import './App.css';
import Title from './components/Title';
import ModuleDetail from './components/ModuleDetails';
import { calculateAge } from './helpers/calcularIdade';

function App() {
  const idade = calculateAge('08/11/1993');

  return (
    <div>
      <Title />
      <ModuleDetail />
      <p>
        {`Sua idade atual é ${idade} anos`}
      </p>
    </div>

  );
}

export default App;
