import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Nav from './nav';
import Back from '../Back.png';

const BeerItem = () => {
  let apiId = useParams('_id');

  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${apiId._id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setItem(json);
      });
  }, []);

  return (
    <>
      <div className='item'>
        <img className='item-img' src={item.image_url} alt="" />
        <h2 className='item-title'>{item.name}</h2>
        <p className='item-text'>{item.tagline}</p>
        <div className='item-data-wrapper'>
          <div>
            <p>First brewed:</p>
            <p>{item.first_brewed}</p>
          </div>
          <div>
            <p>Attenuation level:</p>
            <p>{item.attenuation_level}</p>
          </div>
        </div>
        <p>{item.description}</p>
        <Link to="/beerList"><img className='back-btn' src={Back} alt="-" /></Link>
      </div>
      <Nav />
    </>
  );
}

export default BeerItem;