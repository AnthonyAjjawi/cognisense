import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Telephone from '../assets/telephone.jpg';

function Home() {
  return (
    <>
      <Header />
        <div>
        <img class="image-container" src={Telephone} alt="" />
      </div>
      
      <Body />
    </>
  );
}

export default Home;
