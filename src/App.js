import './App.css';
import Logo from './componentes/Logo'
import Pesquisa from './componentes/Pesquisa';

const listas= ["Início", "Séries", "Filmes", "Minha lista"]
const populares= ["#matrix", "#vingadores", "#titanic", "# simpsons", "#theoffice", "#debieloide"]


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />

        <ul className='listas'>
          {listas.map((texto) => (
            <li className='item'>{texto}</li>
          )) }
        </ul>

        </header>

        <p className='Chamada'>Aproveite a <u>Netflix</u> grátis!</p>

        <Pesquisa />

        <ul className='listas'>
          {populares.map((texto) => (
            <li className='populares'>{texto}</li>
          )) }
        </ul>

        

    </div>
  );
}

export default App;
