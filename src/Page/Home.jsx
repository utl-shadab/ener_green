

// export default Home;
import React from 'react'
import Hero from '../components/Hero/Hero';
import Counter from '../components/Counter/Counter';
import About from '../components/About/About';

import Action from '../components/Action/Action';
import Why from '../components/WhyUs/Why';
import Instagram from '../components/Contact/Instagram';
import BioDiesel from './BioDiesel';
import FactSection from '../components/Fact/FactSection';
const Home = () => {
  return (
    <div>
    <Hero/>
    <Counter/>
    <About/>
    <BioDiesel/>
    <FactSection/>
    <Why/>
    <Instagram/>
    <Action/>
    </div>
  )
}

export default Home
