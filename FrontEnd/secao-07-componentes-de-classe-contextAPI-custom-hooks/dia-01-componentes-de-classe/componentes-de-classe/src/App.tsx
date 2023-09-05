import React from 'react'
import Title from './components/Title';
import './App.css'

class App extends React.Component {
  handleClick = () => {
    alert('Clicou!');
  }

  render() {
    return (
      <div className="App">
        <Title titleMessage='Olá mundo !'/>
      </div>
    )
  }
}

export default App
