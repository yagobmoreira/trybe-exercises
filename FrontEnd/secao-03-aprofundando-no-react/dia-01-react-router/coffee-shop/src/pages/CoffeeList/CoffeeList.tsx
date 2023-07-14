// src/pages/coffee-list/index.tsx
import { coffeeList } from "../../data";
import { useNavigate } from "react-router-dom";
import './coffeelist.css'

function CoffeeList() {
  const navigate = useNavigate();
  return (
    <div className="list-page">
      <h1>Nossos cafés</h1>
      <main>
        <ul>
          {
            coffeeList.map((coffee) => (
              <button
              className="coffee-card"
              style={{
                backgroundImage: `url(${coffee.image})`,
                backgroundSize: 'cover',
              }}
              onClick={() => navigate(`/coffees/${coffee.slug}`)}
            >
              <h3>{coffee.title}</h3>
            </button>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default CoffeeList;