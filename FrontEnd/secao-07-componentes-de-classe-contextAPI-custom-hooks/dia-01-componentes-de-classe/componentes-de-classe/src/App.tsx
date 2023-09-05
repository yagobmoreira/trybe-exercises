import React from 'react'
import './App.css'

class App extends React.Component {
  handleClick = () => {
    alert('Clicou!');
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Clique!</button>
      </div>
    )
  }
}

export default App
