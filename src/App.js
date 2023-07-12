import React from 'react'
import Navbar from './components/Navbar';
import NavbarHero from './components/NavbarHero';
import Card from './components/Card';
import data from "./data"


function App() {
  const values = data.map( (value) => {
    return <Card img={value.coverImg} rating={value.stats.rating} reviewCount={value.stats.reviewCount} location={value.location} title={value.title} price={value.price} />
  })
  return (
    <div className="App">
      <Navbar />
      <NavbarHero />
      <section className="cards-list">
      {values}
      </section>


    </div>
  );
}

export default App;
