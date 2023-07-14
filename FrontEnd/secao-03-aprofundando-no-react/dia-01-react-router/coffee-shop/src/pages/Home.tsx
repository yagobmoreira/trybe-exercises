// src/pages/home/index.tsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <>  
    <h1>Coffeeteria</h1>
      <Link to="/coffees">
        Conheça nossos produtos
      </Link>
    </>
  )
}

export default Home;