import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Dashboard from './components/dashboard/dashboard';
import Output from './components/output/output';
import Form from './components/form/form';
import FormControlGroup from './components/form/form-control-group/form-control-group';
import FooterComponents from './components/footer-components/footer-components';
import FormExperimantalGroup from './components/form/form-experimantal-group/form-experimantal-group';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/output" element={<Output />} />
        <Route path="/form" element={<Form />} />
        <Route path="/control-group" element={<FormControlGroup/>} />
        <Route path="/experimental-group" element={<FormExperimantalGroup/>} />
        <Route path="/FooterComponents" element={<FooterComponents />} />
      </Routes>
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  );
}
export default App;