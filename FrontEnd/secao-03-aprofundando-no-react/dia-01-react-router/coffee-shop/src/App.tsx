// src/App.tsx

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CoffeeList from './pages/CoffeeList/CoffeeList';
import Coffee from './pages/Coffee/Coffee';
import NotFound from './pages/Notfound/Index';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<Home />} />
          <Route path="coffees" element={ <CoffeeList /> } />
          <Route path="coffees/:nomedocafe" element={ <Coffee />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;

