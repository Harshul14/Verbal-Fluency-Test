import React, { useState } from 'react';
import rectangleTop from '../../../Assets/Rectangle-1.png';
import layer from '../../../Assets/Layer-1.png';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../footer/footer';
import { useNavigate } from 'react-router-dom';

const FormControlGroup = () => {
   const navigate = useNavigate();
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
      marginTop: '100px',
      marginBottom: '85px'
   };
   const headingStyle = {
      fontSize: '33px',
      color: '#FE9E0d',
   };
   const buttonStyle = {
      margin: '0 auto',
      textAlign: 'center',
   };
   const handleControlGroupSelection = () => {
      navigate('/dashboard');
   };
   const [criteria, setCriteria] = useState({
      ageOver40: null,
      noCognitiveImpairments: null,
      canSpeakAndHear: null,
   });

   const handleSelection = (criteriaKey, value) => {
      setCriteria(prevState => ({
         ...prevState,
         [criteriaKey]: value,
      }));
   };

   return (
      <div style={containerStyle} className='control-group-container' id='control-group-section'>
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
            <div style={contentStyle} className='control-group-content'>
               <h2 style={headingStyle}>Eligibility Criteria for Control Group</h2>
               <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                  <p style={{ display: 'inline', color: '#333', textAlign: 'justify' }}>1. Age &gt; 40:</p>
                  <label style={{ display: 'inline', marginLeft: '10px', color: '#333', textAlign: 'justify' }}>
                     <input type="radio" name="ageOver40" value="Yes" checked={criteria.ageOver40 === 'Yes'} onChange={() => handleSelection('ageOver40', 'Yes')} />
                     Yes
                  </label>
                  <label style={{ display: 'inline', marginLeft: '10px', color: '#333', textAlign: 'justify' }}>
                     <input type="radio" name="ageOver40" value="No" checked={criteria.ageOver40 === 'No'} onChange={() => handleSelection('ageOver40', 'No')} />
                     No
                  </label>
               </div>
               <div style={{ marginBottom: '20px' }}>
                  <p style={{ display: 'inline', color: '#333', textAlign: 'justify' }}>2. No history of any form of cognitive impairments including memory loss: </p>
                  <label style={{ display: 'inline', marginLeft: '10px', color: '#333', textAlign: 'justify' }}>
                     <input type="radio" name="noCognitiveImpairments" value="Yes" checked={criteria.noCognitiveImpairments === 'Yes'} onChange={() => handleSelection('noCognitiveImpairments', 'Yes')} />
                     Yes
                  </label>
                  <label style={{ display: 'inline', marginLeft: '10px', color: '#333', textAlign: 'justify' }}>
                     <input type="radio" name="noCognitiveImpairments" value="No" checked={criteria.noCognitiveImpairments === 'No'} onChange={() => handleSelection('noCognitiveImpairments', 'No')} />
                     No
                  </label>
               </div>
               <div style={{ marginBottom: '20px' }}>
                  <p style={{ display: 'inline', color: '#333', textAlign: 'justify' }}>3. Can speak and hear without any particular problems:</p>
                  <label style={{ display: 'inline', marginLeft: '10px', color: '#333', textAlign: 'justify' }}>
                     <input type="radio" name="canSpeakAndHear" value="Yes" checked={criteria.canSpeakAndHear === 'Yes'} onChange={() => handleSelection('canSpeakAndHear', 'Yes')} />
                     Yes
                  </label>
                  <label style={{ display: 'inline', marginLeft: '10px', color: '#333', textAlign: 'justify' }}>
                     <input type="radio" name="canSpeakAndHear" value="No" checked={criteria.canSpeakAndHear === 'No'} onChange={() => handleSelection('canSpeakAndHear', 'No')} />
                     No
                  </label>
               </div>
               <button style={buttonStyle} onClick={handleControlGroupSelection}>
                  Submit
               </button>
            </div>
         </div>
         <Footer />
      </div>
   );
};
FormControlGroup.propTypes = {};
FormControlGroup.defaultProps = {};
export default FormControlGroup;