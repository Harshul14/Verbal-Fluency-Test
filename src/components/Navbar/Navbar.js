import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import vector from '../../Assets/Vector.svg';
import logo from '../../Assets/Logo.svg';

const Navbar = () => {
  return (
    <div className="box" style={{ height: "72px", width: "1580px" }}>
      <div className="navbar" style={{ height: "72px", left: "0", position: "fixed", top: "20px", width: "1580px", zIndex: 9999 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
          margin: '0 auto',
          maxWidth: '1586px',
          padding: '0 50px',
          transition: 'color 0.3s',
          cursor: 'pointer',
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img className="Logo" alt="Logo" src={logo} style={{ height: '60px', width: '60px' }} />
          </Link>
          <div className="overlap-group-wrapper" style={{ height: "56px", left: "1029px", position: "absolute", top: "8px", width: "223px" }}>
            <div className="overlap-group" style={{ backgroundColor: "#0b221e", borderRadius: "10px", height: "56px", position: "relative", width: "190px" }}>
              <div className="text-wrapper-2" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: "#eaeaea",
                fontFamily: "Kumbh Sans-Bold, Helvetica",
                fontSize: "20px",
                fontWeight: "700",
                height: "56px",
                left: "0",
                letterSpacing: "0",
                lineHeight: "normal",
                position: "absolute",
                textAlign: "center",
                top: "0",
                width: "190px",
                color: '#FFFACD',
                transition: 'color 0.3s',
                cursor: 'pointer',
              }}>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className="overlap-group-wrapper" style={{ height: "56px", left: "1268px", position: "absolute", top: "8px", width: "223px" }}>
            <div className="overlap-group" style={{ backgroundColor: "#0b221e", borderRadius: "10px", height: "56px", position: "relative", width: "190px" }}>
              <div className="text-wrapper-2" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: "#eaeaea",
                fontFamily: "Kumbh Sans-Bold, Helvetica",
                fontSize: "20px",
                fontWeight: "700",
                height: "56px",
                left: "0",
                letterSpacing: "0",
                lineHeight: "normal",
                position: "absolute",
                textAlign: "center",
                top: "0",
                width: "190px",
                color: '#FFFACD',
                transition: 'color 0.3s',
                cursor: 'pointer',
              }}>
                <Link to="/form" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

