import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Página não encontrada</h1>
      <Link aria-label='to-home' to="/">Voltar para a página inicial</Link>
    </>
  );
}

export default NotFound;