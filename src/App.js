// App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Section from './components/Section';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Banner />
      <main>
        <Section id="gallery" title="My Work">
          <Gallery />
        </Section>
        <Section id="services" title="Services" bgColor="bg-gray-50">
          <Services />
        </Section>
        <Section id="contact" title="Book Your Experience">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;