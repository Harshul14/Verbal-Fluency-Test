import React from 'react';
import rectangleTop from '../../Assets/Rectangle-1.png';
import layer from '../../Assets/Layer-1.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

const Form = ({ handleGroupSelection }) => {
    const navigate = useNavigate();
    const containerStyle = {
        textAlign: 'center',
        marginTop: '-60px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    const contentStyle = {
        flex: '1',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#FFFACD',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginTop: '60px',
        marginBottom: '60px'
    };

    const headingStyle = {
        fontSize: '33px',
        color: '#FE9E0d',
        marginBottom: '20px'
    };

    const buttonStyle = {
        margin: '10px',
        width: '180px',
        textAlign: 'center',
    };

    const containerButtonStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const handleControlGroupSelection = () => {
        navigate('/control-group');
    };

    const handleExperimentalGroupSelection = () => {
        navigate('/experimental-group');
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
                    minHeight: 'calc(100vh - 300px)',
                    position: 'relative',
                }}
            >
                <div className="rectangleTop" style={{
                    height: '539px',
                    left: '0',
                    position: 'fixed',
                    top: '0',
                    width: '100%',
                    zIndex: -1,
                }}>
                    <img src={rectangleTop} alt="rectangleTop" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className='about-us-content' style={contentStyle}>
                    <h2 style={headingStyle}>Select Group</h2>
                    <div style={containerButtonStyle}>
                        <button style={buttonStyle} onClick={handleControlGroupSelection}>
                            Control Group
                        </button>
                        <button style={buttonStyle} onClick={handleExperimentalGroupSelection}>
                            Experimental Group
                        </button>
                    </div>
                </div>
            </div>
            <Footer style={{ flexShrink: 0 }} />
        </div>
    );
};
export default Form;