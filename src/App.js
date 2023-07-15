import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Plans from './components/Plans';
import MoviesShows from './components/MoviesShows';
import Subscribe from './components/Subscribe';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<WithNavbar component={Home} />} />
          <Route path="/plans" element={<WithNavbar component={Plans} />} />
          <Route path="/movies-shows" element={<WithNavbar component={MoviesShows} />} />
          <Route path="/subscribe" element={<WithNavbar component={Subscribe} />} />
          <Route path="/login" element={<WithNavbar component={Login} />} />
          <Route path="/signup" element={<WithNavbar component={SignUp} />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

const WithNavbar = ({ component: Component }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/main' && (
        <>
          <Navbar />
        </>
      )}
      <Component />
    </>
  );
};

export default App;