import React from 'react';
import PropTypes from 'prop-types';
import servicesData from '../../data/servicesData';
import SectionsHead from './SectionsHead';

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionsHead heading="Our Advantages" />
        <div className="wrapper services_wrapper">
          {servicesData.map(({ id, icon, title, info }) => (
            <div className="services_card" key={id}>
              <div className="services_icon">{icon}</div>
              <div className="services_details">
                <h4>{title}</h4>
                <p>{info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  heading: PropTypes.string
};

export default Services;