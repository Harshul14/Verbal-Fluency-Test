// import React from 'react';
// import { Link } from 'react-router-dom';
// import layer from '../../Assets/Layer-2.png';
// import rectangle from '../../Assets/Rectangle-2.png';
// import { FiArrowRight } from 'react-icons/fi';
// import Navbar from '../Navbar/Navbar';

// function Home() {
//   return (
//     <div className="home-container">
//       <div
//         className="home-banner-container"
//         style={{
//           backgroundImage: `url(${layer})`,
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center center',
//           height: '100vh', // Make the container full viewport height
//         }}
//       >
//         <Navbar />
//         <div className="home-bannerImage-container">
//           {/* <img src={layer} alt="" /> */}
//         </div>
//         <div className="rectangle" style={{
//           height: '539px',
//           left: '0',
//           position: 'fixed',
//           bottom: '0',
//           width: '1728px',
//           // zIndex: -1, // Set a lower z-index to place it behind the Navbar
//         }}>
//           <img src={rectangle} alt="rectangle" />
//         </div>

//         <div className="home-text-section">
//           <h1 className="primary-heading">
//             Verbal Fluency Test
//           </h1>
//           <p className="primary-text">
//             {/* sub text yha likh */}
//           </p>
//           <button className="secondary-button">
//             Try Now <FiArrowRight />{" "}
//           </button>
//         </div>
//         <div className="home-image-section">
//           {/* <img src={layer} alt="" /> yha pr landing image lgana hai */}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Home;
import React, { useState, useEffect } from 'react';
import layer from '../../Assets/Layer-2.png';
import Asset from '../../Assets/Asset-1.jpg';
import rectangleBottom from '../../Assets/Rectangle-2.png';
import rectangleTop from '../../Assets/Rectangle-1.png';
import { FiArrowRight } from 'react-icons/fi';
import Navbar from '../Navbar/Navbar';
// import dummyVid from '../../Assets/dummy.mp4';
// import zIndex from '@mui/material/styles/zIndex';
// import About from '../about/about';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';

function Home() {
  // const navigate = useNavigate(); // Initialize useHistory
  // // Function to handle the button click and navigate to the Dashboard page
  // const handleTryNowClick = () => {
  //   navigate('/dashboard'); // Navigate to the "/dashboard" route
  // };
  const navigate = useNavigate();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleTryNowClick = () => {
    setShouldAnimate(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 300);
  };

  useEffect(() => {
    if (shouldAnimate) {
      const timeoutId = setTimeout(() => {
        setShouldAnimate(false);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [shouldAnimate]);
  return (
    <div className={`home-container ${shouldAnimate ? 'fade-in active' : ''}`} id='home'>
      {/* <div className="home-container" id='home'> */}
      <div
        className="home-banner-container"
        style={{
          backgroundImage: `url(${layer})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center center',
          height: '100vh',
          position: 'relative',
        }}
      >
        <Navbar />
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

        <div className="home-bannerImage-container">
          {/* <img src={layer} alt="" /> */}
        </div>
        <div className="rectangle" style={{
          height: '539px',
          left: '0',
          position: 'fixed',
          bottom: '0',
          width: '1728px',
          // zIndex: -1,
        }}>
          <img src={rectangleBottom} alt="rectangleBottom" />
        </div>
        <div className="home-text-section" style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          zIndex: 1
        }}>
          <h1 className="primary-heading" style={{
            fontSize: '28px',
            textAlign: 'justify'
          }}>
            <p style={{
              fontSize: '50px',
              color: '#FFFACD',
              textAlign: 'justify',
              marginTop: "50px",
              marginBottom:"0px"
            }}>Verbal Fluency Test</p>
          </h1>
          <p className="primary-text" style={{ textAlign: 'justify' }}>
            Creating English verbal fluency software to detect early cognitive speech issues, with a focus on remote areas lacking easy access to medical diagnosis.
          </p>
          {/* <button className="secondary-button">
            Try Now <FiArrowRight />{" "}
          </button> */}
          {/* <button className="secondary-button" onClick={handleTryNowClick}>
            Try Now <FiArrowRight />{" "}
          </button> */}
          <button className="secondary-button" onClick={handleTryNowClick}>
            Try Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section" style={{
          position: 'absolute',
          top: '55%',
          left: '70%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          zIndex: 1,
          // marginRight:'300px'
        }}>
          <img className="Asset" alt="Asset" src={Asset} style={{ borderRadius: '15px' }} />
          {/* <video
            src={dummyVid} autoPlay loop muted playsInline loading="lazy" style={{
              borderRadius: '10px'
            }} /> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Home;