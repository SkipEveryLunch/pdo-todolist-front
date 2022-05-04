import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';
import Context from './Context';
const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <Context.Provider value={{ isLoggedin, setIsLoggedin }}>
      <div className="baseLayout">
        <Header />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
