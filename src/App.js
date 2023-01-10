import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home,About,Portfolio, Contact } from "./routes/index.js";
import { Navigation } from './components/index';
import "./core-ui/Styles.sass";
import './routes/contact/Contact.sass'
import './routes/about/About.sass'
import './core-ui/Hover.sass';
import './routes/home/Home.sass';
import './components/footer/Footer.sass';
import './components/navigation/Navigation.sass';
import './routes/portfolio/Portfolio.sass';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
   <Router>
     <Analytics />
    <Navigation />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
   </Router>
  );
}

export default App;
