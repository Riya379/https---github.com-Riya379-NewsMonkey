import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<News key="general" pageSize={8} country="in" category="general" />} />
        <Route path="/business" element={<News key="business" pageSize={8} country="in" category="business" />} />
        <Route path="/entertainment" element={<News key="entertainment" pageSize={8} country="in" category="entertainment" />} />
        <Route path="/general" element={<News key="general" pageSize={8} country="in" category="general" />} />
        <Route path="/health" element={<News key="health" pageSize={8} country="in" category="health" />} />
        <Route path="/science" element={<News key="science" pageSize={8} country="in" category="science" />} />
        <Route path="/sports" element={<News key="sports" pageSize={8} country="in" category="sports" />} />
        <Route path="/technology" element={<News key="technology" pageSize={8} country="in" category="technology" />} />
      </Routes>
    </Router>
  );
}

export default App;

