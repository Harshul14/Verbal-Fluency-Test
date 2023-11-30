import React from 'react';
import logo from '../../Assets/Logo.svg';

const Footer = () => (
  <footer
    className="footer"
    style={{
      backgroundColor: '#010f0d',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      position: 'relative',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      padding: '60px',
    }}
  >
    <div
      className='left-pane'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        marginLeft: '20px',
      }}
    >
      <div className="logo">
        <img
          src={logo}
          style={{ height: '60px', width: '60px' }}
          alt="Logo"
        />
      </div>
      <p
        style={{
          fontSize: '18px',
          maxWidth: '500px',
          // color: '#6a6a6a',
          margin: '1.5rem 0rem',
          color: '#FFFACD',
          marginTop: '10px',
          textAlign: 'center',
        }}
      >
        Unlocking Minds, Empowering Lives: Pioneering Verbal Fluency Solutions for Healthier Futures
      </p>
    </div>
    <div className="footer-grid" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', marginLeft: '350px' }}>
      <div>
        <a href="/about" className="footer-link-2" style={{ color: "#FFFACD", textDecoration: 'none' }}>About Us</a><br /><br />
        <a href="/terms" className="footer-link-2" style={{ color: "#FFFACD", textDecoration: 'none' }}>Terms and Conditions</a><br /><br />
        <a href="/cookies" className="footer-link-2" style={{ color: "#FFFACD", textDecoration: 'none' }}>Cookie Policy</a><br /><br />
        <div className="footer-link-2" style={{ color: "#FFFACD" }}>Let’s chat!</div>
      </div>
    </div>
    <div className="footer-grid-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', paddingLeft: '100px' }}>
      <a href="/security" className="footer-link-2" style={{ color: "#FFFACD", textDecoration: 'none' }}>Security</a><br></br>
      <a href="/privacy" className="footer-link-2" style={{ color: "#FFFACD", textDecoration: 'none' }}>Privacy Policy</a><br></br>
      <a href="mailto:hi@avo.app" className="footer-link-2" style={{ color: "#FFFACD", textDecoration: 'none' }}>hi@avo.app</a><br></br>
    </div>
  </footer>
);
export default Footer;