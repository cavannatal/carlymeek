// Section.js
import React from 'react';

const Section = ({ id, title, children, bgColor = "bg-white" }) => (
  <section id={id} className={`py-20 ${bgColor}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-light mb-12 text-center">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;