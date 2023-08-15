import styled from 'styled-components'

function App() {

  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    background-color: #022c16;
    margin-bottom: 3em;
    `;

  const Container = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    `;
  return (
    <>
      <Header>
        <h1>React Styled Components</h1>
      </Header>
      <Container>
        <p>Conteúdo</p>
      </Container>
    </>
  )
}

export default App
