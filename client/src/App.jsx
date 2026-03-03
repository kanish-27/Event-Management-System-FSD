import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            {/* Added placeholders for other routes */}
            <Route path="/about" element={<div className="container" style={{ padding: '5rem 0' }}><h1>About Us</h1><p>Welcome to NextEvent, your premier destination for discovering and managing events.</p></div>} />
            <Route path="/login" element={<div className="container" style={{ padding: '5rem 0' }}><h1>Login</h1><p>Login functionality coming soon.</p></div>} />
            <Route path="/signup" element={<div className="container" style={{ padding: '5rem 0' }}><h1>Sign Up</h1><p>Sign up functionality coming soon.</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
