import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Dashboard from './components/dashboard/dashboard';
import Output from './components/output/output';
import FooterComponents from './components/footer-components/footer-components';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  //   return (
  //     <div className="App">
  //       <Home/>
  //       <Router>
  //         <Routes>
  //           <Route exact path="/" element={<Home/>} />
  //           <Route path="/about" element={<About/>} />
  //         </Routes>
  //       </Router>
  //       <About/>
  //       <Footer/>
  //       <Dashboard/>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/output" element={<Output />} />
        <Route path="/FooterComponents" element={<FooterComponents />} />
      </Routes>
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
