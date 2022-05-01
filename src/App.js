import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';
const App = () => {
  return (
    <div className="baseLayout">
      <Header />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
