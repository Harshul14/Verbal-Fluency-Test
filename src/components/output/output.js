import React, { useState, useEffect } from 'react';
import rectangleTop from '../../Assets/Rectangle-1.png';
// import rectangleBottom from '../../Assets/Rectangle-2.png';
import layer from '../../Assets/Layer-1.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
// import { response } from 'express';

function Output() {
   const containerStyle = {
      textAlign: 'center',
      marginTop: '-60px'
   };

   const [stress, setStress] = useState(null);
   const [percent, setPercent] = useState(null);
   const [pdf, setPdf] = useState(null);

   useEffect(() => {
      const storedStressData = sessionStorage.getItem("stress");
      const storedPercentData = sessionStorage.getItem("percent");
      const storedPdfData = sessionStorage.getItem("pdf");
      setStress(storedStressData)
      setPercent(storedPercentData)
      setPdf(storedPdfData)
   }, []);

   const openStoredPDF = () => {
      if (pdf) {
         window.open(pdf, 'Details');
      }
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
               <h2 style={headingStyle}>Thanks Mate!</h2>
               <h2 style={headingStyle}>Your work brings valuable outcomes</h2>
               <p style={paragraphStyle}>
                  Percentage of Movement Detected : {percent && (<>{percent}</>)}
               </p>
               <p style={paragraphStyle}>
                  <button onClick={openStoredPDF}>Open PDF</button>
                  1. Number of Correct Words to a Class :
               </p>
               <p style={paragraphStyle}>
                  2. Time spent in uttering Words :
               </p>
               <p style={paragraphStyle}>
                  3. Time when there is Silence :
               </p>
               <p style={paragraphStyle}>
                  4. Time for Context Switching :
               </p>
               <p style={paragraphStyle}>
                  5. Are you Stressed? : {stress && (<>{stress}</>)}
               </p>
            </div>
         </div>
         <Footer />
      </div>
   );
}
export default Output;
