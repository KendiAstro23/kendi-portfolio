import React from 'react';
import './App.css';
import Home from './components/Home';
import MyWorks from './components/MyWorks';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
          <p>Web Developer and UI/UX Designer</p> {/* Website description */}
          <div className="nav-section">
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#services">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
      <Home />
      <MyWorks />
      <Portfolio />
      <ContactForm />
    </div>
  );
}

export default App;
