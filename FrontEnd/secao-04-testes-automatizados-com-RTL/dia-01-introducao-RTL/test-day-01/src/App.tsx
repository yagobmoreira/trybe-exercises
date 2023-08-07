import { useState } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

function App() {
  const [email, setEmail] = useState('');
  const [saveEmail, setSaveEmail] = useState('');

  const handleSendEmail = () => {
    setSaveEmail(email);
    setEmail('');
  };

  return (
    <div className="App">
      <div className="form-container">
        <label htmlFor="id-email">
          Email:
          <input
            id="id-email"
            type="email"
            onChange={ (e) => setEmail(e.target.value) }
            value={ email }
          />
        </label>
        <input
          id="btn-send"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ handleSendEmail }
        />
        <input
          id="btn-back"
          type="button"
          value="Voltar"
          onClick={ () => setSaveEmail('') }
        />
         <ValidEmail email={ saveEmail } />
      </div>
    </div>
  );
}

export default App;
