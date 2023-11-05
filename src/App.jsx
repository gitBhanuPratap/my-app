
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage.jsx';
import Feedback from './components/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> {/* Login page */}
        <Route path="/home" element={<HomePage />} /> {/* Home page */}
        <Route path="/feedback" element={<Feedback />} /> {/* Another page */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>

    
  );
}

export default App;
