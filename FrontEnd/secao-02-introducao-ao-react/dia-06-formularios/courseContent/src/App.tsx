import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [schooling, setSchooling] = useState("Médio");
  const [resume, setResume] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  function resetForm() {
    setName("");
    setEmail("");
    setSchooling("");
    setResume("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      alert(
        `Nome: ${name}\nemail: ${email}\nEscolaridade: ${schooling}\nExperiências: ${resume}`
      );
      resetForm();
    } else {
      setError(true);
    }
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Nome
        <input
          required 
          value={name} 
          onChange={({ target }) => setName(target.value)} />
      </label>
      <label>
        E-mail
        <input
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label>
        Escolaridade
        <select
          value={schooling}
          onChange={({ target }) => setSchooling(target.value)}
        >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
      </label>
      <label>
        Resumo das experiências
        <textarea
          value={resume}
          onChange={({ target }) => setResume(target.value)}
        />
      </label>
      <button>Enviar</button>
      {error && (
        <h4>
          Você precisa aceitar os termos e condições para poder enviar o
          currículo
        </h4>
      )}
      <label>
        Aceito os termos e condições
        <input
          type="checkbox"
          checked={terms}
          onChange={() => setTerms((prevTerms) => !prevTerms)}
        />
      </label>
    </form>
  );
}

export default App;
