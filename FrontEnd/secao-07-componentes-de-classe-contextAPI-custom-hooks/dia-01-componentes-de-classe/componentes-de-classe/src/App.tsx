import React from 'react'
import Title from './components/Title';
import './App.css'

class App extends React.Component {
  handleClick = () => {
    this.setState({
      finished: true,
      course: 'Fundamentos'
    })
  }

  state = {
    course: 'Front-end',
    finished: false
  }

  render() {
    const { course, finished } = this.state;
    return (
      <div className="App">
        <Title titleMessage="Hello, world!" />
        <h1>{`Módulo: ${course}`}</h1>
        <button 
          onClick={this.handleClick}
          disabled={finished}
        >
          Finalizar curso
        </button>
        {finished && <h2>Curso Finalizado!</h2>}
      </div>
    )
  }
}

export default App
