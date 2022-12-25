import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home,About, Contact } from "./routes/index.js";
import { Navigation } from './components/index';
import "./core-ui/Styles.sass";
import './routes/contact/Contact.sass'
import './routes/about/About.sass'
import './core-ui/Hover.sass';
import './routes/home/Home.sass';
import './components/footer/Footer.sass';
import './components/navigation/Navigation.sass';


function App() {
  return (
   <Router>
    <Navigation />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
      </Routes>
   </Router>
  );
}

export default App;
