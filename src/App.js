import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
