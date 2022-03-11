import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';

const BeerList = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setApi(json);
      });
  }, []);

  return (
    <div>
      {api.map((item, i) => {
        return (
          <div className='beerItems' key={i}>
            <figure className='item-img-wrapper'>
              <img src={item.image_url} alt="-" />
            </figure>
            <article>
              <h3 className='item-title'>{item.name}</h3>
              <p className='item-text'>{item.tagline}</p>
              <p className='item-subtext'>Created by: {item.name}</p>
              <Link className='link' to={`/beerItem/${item._id}`}>Details</Link>
            </article>
          </div>
        );
      })}
      <Nav />
    </div>
  );
}

export default BeerList;