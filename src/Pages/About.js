import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Our Service</h1>
        <p>Find the best internet providers in your local area with just a few clicks.</p>
      </div>

      <div className="about-content">
        <section>
          <h2>🌐 Our Mission</h2>
          <p>
            Our goal is to make it easy for you to find trusted internet service providers 
            in your city, area, or even your neighborhood. No more confusion — just 
            search, compare, and connect!
          </p>
        </section>

        <section>
          <h2>💡 What We Offer</h2>
          <ul>
            <li>Find ISPs based on your location (Country → City → Area)</li>
            <li>View provider details like speed, price, and contact info</li>
            <li>Directly contact providers or visit their websites</li>
            <li>Accurate, user-friendly, and fast results</li>
          </ul>
        </section>

        <section>
          <h2>🤝 For Internet Providers</h2>
          <p>
            We also help Internet Service Providers reach new customers. 
            Simply fill out our <strong>Apply Form</strong> with your service details, 
            and we’ll make your business visible to users searching in your area.
          </p>
          <button className='apply-services' onClick={() => window.location.href='/apply'}>Apply Your Services</button>
        </section>

        <section>
          <h2>📞 Contact Us</h2>
          <p>
            Have questions or suggestions? We’d love to hear from you!  
            Email us at <a href="mailto:info@internetfinder.com">info@internetfinder.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
