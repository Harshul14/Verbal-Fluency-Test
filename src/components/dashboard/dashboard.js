// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { DashboardWrapper } from "./dashboard.styled";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import useClipboard from "react-use-clipboard";
// import * as cocoSsd from "@tensorflow-models/coco-ssd";
// import "@tensorflow/tfjs";
// import Webcam from "react-webcam";
// import Navbar from "../Navbar/Navbar";
// import "./dashboard.css";
// import { useNavigate } from 'react-router-dom';
// import rectangleTop from '../../Assets/Rectangle-1.png';
// import rectangleBottom from '../../Assets/Rectangle-2.png';
// import layer from '../../Assets/Layer-1.png';
// import Footer from "../footer/footer";

// const Dashboard = () => {
//     const [textToCopy, setTextToCopy] = useState();
//     const [isCopied, setCopied] = useClipboard(textToCopy, {
//         successDuration: 1000,
//     });
//     const [model, setModel] = useState(null);
//     const [cameraEnabled, setCameraEnabled] = useState(false);
//     const [listeningTimeout, setListeningTimeout] = useState(null); // Added state to track the listening timer
//     const navigate = useNavigate();
//     const [shouldAnimate, setShouldAnimate] = useState(false);
//     const webcamRef = React.useRef(null);
//     const startListening = () => {
//         SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
//         setCameraEnabled(true);
//         const timeoutId = setTimeout(() => {
//             stopListening();
//         }, 60000);
//         setListeningTimeout(timeoutId);
//     };
//     const stopListening = () => {
//         SpeechRecognition.stopListening();
//         setCameraEnabled(false);
//         if (listeningTimeout) {
//             clearTimeout(listeningTimeout);
//         }
//     };
//     const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
//     useEffect(() => {
//         cocoSsd.load().then((loadedModel) => {
//             setModel(loadedModel);
//         });
//     }, []);

//     // const detectObjects = async () => {
//     //    if (webcamRef.current) {
//     //       const image = webcamRef.current.getScreenshot();
//     //       const predictions = await model.detect(image);
//     //       const objects = predictions.map((prediction) => prediction.class);
//     //       const combinedText = `${transcript} Detected objects: ${objects.join(", ")}`;
//     //       setTextToCopy(combinedText);
//     //    }
//     // };
//     useEffect(() => {
//         if (shouldAnimate) {
//             const timeoutId = setTimeout(() => {
//                 setShouldAnimate(false);
//             }, 300);
//             return () => clearTimeout(timeoutId);
//         }
//     }, [shouldAnimate]);

//     const detectObjects = async () => {
//         if (webcamRef.current) {
//             const imageSrc = webcamRef.current.getScreenshot()
//             const image = new Image();
//             image.src = imageSrc;
//             image.onload = async () => {
//                 const predictions = await model.detect(image);
//                 const objects = predictions.map((prediction) => prediction.class);
//                 const combinedText = `${transcript} Detected objects: ${objects.join(", ")}`;
//                 setTextToCopy(combinedText);
//             };
//         }
//     };
//     if (!browserSupportsSpeechRecognition) {
//         return null;
//     }
//     return (
//         <div
//             className="home-banner-container"
//             style={{
//                 backgroundImage: `url(${layer})`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh',
//                 position: 'relative',
//             }}
//         >
//             <div className="rectangleTop" style={{
//                 height: '539px',
//                 left: '0',
//                 position: 'fixed',
//                 top: '0',
//                 width: '1728px',
//                 // width: '100%',
//                 zIndex: -1,
//             }}>
//                 <img src={rectangleTop} alt="rectangleTop" />
//             </div>
//             <div className={`home-container ${shouldAnimate ? 'fade-in active' : ''}`} id='home'>
//                 <Navbar />
//                 <div>
//                     <h2>Dummy Speech Listener, Object Detection, and Camera</h2>
//                 </div>
//                 <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                     <br />
//                     {cameraEnabled && (
//                         <div className="webcam-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                             <Webcam ref={webcamRef} style={{ borderRadius: '20px', marginInline: '20px' }} />
//                         </div>
//                     )}
//                     <div className="main-content" onClick={detectObjects} style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                             {transcript}
//                         </div>
//                         <div className="btn-style">
//                             <button onClick={startListening} style={{ position: 'relative', top: '120px' }}>Start Listening</button>
//                             <button onClick={stopListening} style={{ position: 'relative', top: '120px' }}>Stop Listening</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { DashboardWrapper } from "./dashboard.styled";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import useClipboard from "react-use-clipboard";
// import * as cocoSsd from "@tensorflow-models/coco-ssd";
// import "@tensorflow/tfjs";
// import Webcam from "react-webcam";
// import Navbar from "../Navbar/Navbar";
// import "./dashboard.css";
// import { useNavigate } from 'react-router-dom';
// import rectangleTop from '../../Assets/Rectangle-1.png';
// import rectangleBottom from '../../Assets/Rectangle-2.png';
// import layer from '../../Assets/Layer-1.png';
// import Footer from "../footer/footer";

// const Dashboard = () => {
//     const [textToCopy, setTextToCopy] = useState();
//     const [isCopied, setCopied] = useClipboard(textToCopy, {
//         successDuration: 1000,
//     });
//     const [model, setModel] = useState(null);
//     const [cameraEnabled, setCameraEnabled] = useState(false);
//     const [listeningTimeout, setListeningTimeout] = useState(null);
//     const [stopListeningTime, setStopListeningTime] = useState(null);
//     const navigate = useNavigate();
//     const [shouldAnimate, setShouldAnimate] = useState(false);
//     const [dataFromModel, setDataFromModel] = useState(null);
//     const webcamRef = React.useRef(null);
//     const startListening = () => {
//         SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
//         setCameraEnabled(true);
//         const timeoutId = setTimeout(() => {
//             stopListening();
//         }, 60000);
//         setListeningTimeout(timeoutId);
//     };
//     const stopListening = () => {
//         SpeechRecognition.stopListening();
//         setCameraEnabled(false);
//         if (listeningTimeout) {
//             clearTimeout(listeningTimeout);
//         }
//         setStopListeningTime(new Date());
//         // navigate('/output');//isse immediate jaega
//         setTimeout(() => {
//             navigate('/output'); // Navigate to the Output component path after 2 seconds
//         }, 2000);

//         fetch("flask_api_endpoint_here")
//             .then((response) => response.json())
//             .then((data) => {
//                 setDataFromModel(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data from Flask API:", error);
//             });
//     };
//     const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
//     useEffect(() => {
//         cocoSsd.load().then((loadedModel) => {
//             setModel(loadedModel);
//         });
//     }, []);

//     useEffect(() => {
//         if (shouldAnimate) {
//             const timeoutId = setTimeout(() => {
//                 setShouldAnimate(false);
//             }, 300);
//             return () => clearTimeout(timeoutId);
//         }
//     }, [shouldAnimate]);

//     const detectObjects = async () => {
//         if (webcamRef.current) {
//             const imageSrc = webcamRef.current.getScreenshot()
//             const image = new Image();
//             image.src = imageSrc;
//             image.onload = async () => {
//                 const predictions = await model.detect(image);
//                 const objects = predictions.map((prediction) => prediction.class);
//                 const combinedText = `${transcript} Detected objects: ${objects.join(", ")}`;
//                 setTextToCopy(combinedText);
//             };
//         }
//     };

//     if (!browserSupportsSpeechRecognition) {
//         return null;
//     }

//     return (
//         <div className="home-banner-container" style={{ backgroundImage: `url(${layer})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh', position: 'relative' }}>
//             <div className="rectangleTop" style={{ height: '539px', left: '0', position: 'fixed', top: '0', width: '1728px', zIndex: -1 }}>
//                 <img src={rectangleTop} alt="rectangleTop" />
//             </div>
//             <div className={`home-container ${shouldAnimate ? 'fade-in active' : ''}`} id='home'>
//                 <Navbar />
//                 {/* <div>
//                     <h2>Speak and Witness Your Verbal Excellence!</h2>
//                 </div> */}
//                 <div>
//                     <h2 style={{ color: '#FE9E0D', textShadow: '-0.5px -0.5px 0 #FFFACD, 0.5px -0.5px 0 #FFFACD, -0.5px 0.5px 0 #FFFACD, 0.5px 0.5px 0 #FFFACD' }}>Speak and Witness Your Verbal Excellence!</h2>
//                 </div>


//                 <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                     <br />
//                     {cameraEnabled && (
//                         <div className="webcam-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                             <Webcam ref={webcamRef} style={{ borderRadius: '20px', marginInline: '20px' }} />
//                         </div>
//                     )}
//                     <div className="main-content" onClick={detectObjects} style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                             {transcript}
//                         </div>
//                         {stopListeningTime && dataFromModel && (
//                             <div>
//                                 <h3>No. of correct words spoken: {dataFromModel.correctWords}</h3>
//                                 <h3>Time spent in uttering words: {dataFromModel.timeSpentInUttering} seconds</h3>
//                                 <h3>Time when there is silence: {dataFromModel.timeSilence} seconds</h3>
//                                 <h3>Time for context switching: {dataFromModel.timeContextSwitching} seconds</h3>
//                             </div>
//                         )}
//                         <div className="btn-style">
//                             <button onClick={startListening} style={{ position: 'relative', top: '120px' }}>Start Listening</button>
//                             <button onClick={stopListening} style={{ position: 'relative', top: '120px' }}>Stop Listening</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import React, { useState, useEffect, useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import useClipboard from "react-use-clipboard";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import Webcam from "react-webcam";
import Navbar from "../Navbar/Navbar";
import "./dashboard.css";
import { useNavigate } from 'react-router-dom';
import rectangleTop from '../../Assets/Rectangle-1.png';
// import rectangleBottom from '../../Assets/Rectangle-2.png';
import layer from '../../Assets/Layer-1.png';

const Dashboard = () => {
    const [textToCopy, setTextToCopy] = useState();
    // const [isCopied, setCopied] = useClipboard(textToCopy, {
    //     successDuration: 1000,
    // });
    // const [recording, setRecording] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const [model, setModel] = useState(null);
    const [cameraEnabled, setCameraEnabled] = useState(false);
    const [listeningTimeout, setListeningTimeout] = useState(null);
    const [stopListeningTime, setStopListeningTime] = useState(null);
    const navigate = useNavigate();
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [dataFromModel, setDataFromModel] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recordedVideo, setRecordedVideo] = useState(null);

    const startListening = () => {
        setVideoStarted(true);
        setCameraEnabled(true);
        const timeoutId = setTimeout(() => {
            handleStopCaptureClick();
        }, 30000);
        setListeningTimeout(timeoutId);
        const timeoutIdCam = setTimeout(() => {
            handleStartCaptureClick();
            SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
        }, 6000);
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setCameraEnabled(false);
        if (listeningTimeout) {
            clearTimeout(listeningTimeout);
        }
        setStopListeningTime(new Date());
        handleStopCaptureClick();
    };
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);

    // const handleStartCaptureClick = React.useCallback(() => {
    //     setCapturing(true);
    //     mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
    //         mimeType: "video/webm"
    //     });
    //     mediaRecorderRef.current.addEventListener(
    //         "dataavailable",
    //         handleDataAvailable
    //     );
    //     mediaRecorderRef.current.start();
    // }, [webcamRef, setCapturing, mediaRecorderRef]);
    const handleStartCaptureClick = React.useCallback(() => {
        if (webcamRef.current) {
            setCapturing(true);
            mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
                mimeType: "video/webm"
            });
            mediaRecorderRef.current.addEventListener(
                "dataavailable",
                handleDataAvailable
            );
            mediaRecorderRef.current.start();
        }
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(

        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );
    const handleStopCaptureClick = React.useCallback(() => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setCapturing(false);
            handleDownload();
            console.log('before')
            console.log('after')
        }
    }, [mediaRecorderRef, setCapturing]);
    let url = "https://be6d-35-238-95-38.ngrok-free.app"  // yeh change krna pdega
    const handleRegenerateClick = async (blob) => {
        try {
            const formData = new FormData();
            formData.append('video', blob, 'video.mp4');

            const response = await fetch(url + '/api/get_data', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const responseData = await response.json();
                sessionStorage.setItem("stress", responseData.stress);
                sessionStorage.setItem("percent", responseData.percent);
                sessionStorage.setItem("pdf", responseData.pdf);
                console.log(responseData);
                navigate('/output');
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };
    const handleDownload = React.useCallback(() => {
        if (recordedChunks) {
            const blob = new Blob(recordedChunks, {
                type: "video/mp4"
            });
            console.log(blob);
            const url = URL.createObjectURL(blob);
            handleRegenerateClick(blob);
            setRecordedChunks([]);
        }
    }, [recordedChunks]);
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    useEffect(() => {
        cocoSsd.load().then((loadedModel) => {
            setModel(loadedModel);
        });
    }, []);

    useEffect(() => {
        if (shouldAnimate) {
            const timeoutId = setTimeout(() => {
                setShouldAnimate(false);
            }, 300);
            return () => clearTimeout(timeoutId);
        }
    }, [shouldAnimate]);

    const detectObjects = async () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot()
            const image = new Image();
            image.src = imageSrc;
            image.onload = async () => {
                const predictions = await model.detect(image);
                const objects = predictions.map((prediction) => prediction.class);
                const combinedText = `${transcript} Detected objects: ${objects.join(", ")}`;
                setTextToCopy(combinedText);
            };
        }
    };
    if (!browserSupportsSpeechRecognition) {
        return null;
    }
    return (
        <div className="home-banner-container" style={{ backgroundImage: `url(${layer})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh', position: 'relative' }}>
            <div className="rectangleTop" style={{ height: '539px', left: '0', position: 'fixed', top: '0', width: '1728px', zIndex: -1 }}>
                <img src={rectangleTop} alt="rectangleTop" />
            </div>
            <div className={`home-container ${shouldAnimate ? 'fade-in active' : ''}`} id='home'>
                <Navbar />
                <div>
                    <h2 style={{ color: '#FE9E0D', textShadow: '-0.5px -0.5px 0 #FFFACD, 0.5px -0.5px 0 #FFFACD, -0.5px 0.5px 0 #FFFACD, 0.5px 0.5px 0 #FFFACD' }}>Speak and Witness Your Verbal Excellence!</h2>
                </div>

                <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <br />
                    {cameraEnabled && (
                        <div className="webcam-container">
                            {cameraEnabled && (
                                <div>
                                    <Webcam audio={true} ref={webcamRef} style={{ borderRadius: '20px', marginInline: '20px' }} />
                                </div>
                            )}
                        </div>
                    )}
                    <div className="main-content" onClick={detectObjects} style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        {recordedVideo && (
                            <video controls src={recordedVideo} style={{ width: '100%', maxHeight: '300px', borderRadius: '20px' }} />
                        )}

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            {transcript}
                        </div>
                        {stopListeningTime && dataFromModel && (
                            <div>
                                <h3>No. of correct words spoken: {dataFromModel.correctWords}</h3>
                                <h3>Time spent in uttering words: {dataFromModel.timeSpentInUttering} seconds</h3>
                                <h3>Time when there is silence: {dataFromModel.timeSilence} seconds</h3>
                                <h3>Time for context switching: {dataFromModel.timeContextSwitching} seconds</h3>
                            </div>
                        )}
                        <div className="btn-style">
                            <button onClick={startListening} style={{ position: 'relative', top: '120px' }}>Start Listening</button>
                            <button onClick={stopListening} style={{ position: 'relative', top: '120px' }}>Stop Listening</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Dashboard;