import './App.css';
import AllBeer from './AllBeer.png';
import RandomBeer from './RandomBeer.png';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <figure>
        <img src={AllBeer} alt="-" />
      </figure>
      <div className='select-btn'><Link to="/beerList">All Beers</Link></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
      <figure>
        <img src={RandomBeer} alt="-" />
      </figure>
      <div className='select-btn'><Link to={`/beerItem/random`}>Random Beer</Link></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis.</p>
    </div>
  );
}

export default App;
