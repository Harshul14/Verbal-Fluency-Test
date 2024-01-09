import React from 'react';
import rectangleTop from '../../Assets/Rectangle-1.png';
import layer from '../../Assets/Layer-1.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';

function About() {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '-60px'
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#FFFACD',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    marginTop: '60px',
    marginBottom: '60px'
  };
  const headingStyle = {
    fontSize: '33px',
    color: '#FE9E0d',
    marginBottom: '20px',
  };
  const paragraphStyle = {
    fontSize: '18px',
    color: '#333',
    lineHeight: '1.5',
    margin: '20px',
    textAlign: 'justify'
  };

  return (
    <div style={containerStyle} className='about-us-container' id='about-us-section'>
      <Navbar />
      <div
        className="home-banner-container"
        style={{
          backgroundImage: `url(${layer})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '0vh',
          position: 'relative',
        }}
      >
        <div className="rectangleTop" style={{
          height: '539px',
          left: '0',
          position: 'fixed',
          top: '0',
          width: '1728px',
          zIndex: -1,
        }}>
          <img src={rectangleTop} alt="rectangleTop" />
        </div>
        <div style={contentStyle} className='about-us-content'>
          <h2 style={headingStyle}>About Us</h2>
          <p style={paragraphStyle}>
            We are aiming to develop software for testing an individual's verbal fluency in the English language.
            Verbal fluency results can serve as early indicators of diseases involving cognitive speech impairments,
            particularly dementia and autism. While previous work has been conducted in this field,
            there is currently no such system available in India.
          </p>
          <p style={paragraphStyle}>
            Our motivation stems from the fact that medical diagnoses are not always accurate, and we aim to create
            a system that can not only recognize audio voices but also determine the person's confidence level and
            the emotions with which they are speaking. Our ultimate goal is to reach remote areas of the country
            where medical diagnoses are not readily available. This lack of accessibility sometimes leads to
            ignorance of such problems, further contributing to the development of diseases like dementia and
            autism. Moreover, after the COVID-19 pandemic, verbal fluency and cognitive speech impairment have
            gained prominence as essential early indicators of these diseases, as many people experienced these
            issues during the pandemic.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;