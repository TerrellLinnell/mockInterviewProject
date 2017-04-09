import React from 'react';
import {Button} from 'react-bootstrap';

const Header = () => {
  return (
    <div className='App'>
      <div className='AppHeaderFlexbox'>
        <div className='HeaderText'>
          <h2 className='Title'>Your morning ritual, refined.</h2>
          <p className='descriptionText'> Get underwear, socks and shaving essentials shipped to your door. The easiest way to stay fresh and clean. </p>
          <Button className='btn btn-success ProductsButton'> Products & Pricing ▶️ </Button>
          <p> Fear commitment? No problem. We offer a hassle free return promise. </p>
        </div>
      </div>
    </div>
  )
}

export default Header;
