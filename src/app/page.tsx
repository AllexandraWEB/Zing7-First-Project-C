import React from 'react';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Description from './sections/Description';
import ContactUs from "./sections/ContactUs";
import OtherServices from "./sections/OtherServices";

const Home = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Description />
      <ContactUs />
      <OtherServices />
    </main>
  );
};

export default Home;