import './App.css';
import Navbar from './componets/Navbar/Navbar';
import Intro from './componets/Intro/Intro';
import Services from './componets/Services/Services';
import Experience from './componets/Experience/Experiemce';
import Portfolio from './componets/Portfolio/Portfolio';
import Contact from './componets/Contact/Contact';
import { useContext } from "react";
import { themeContext } from "./Context";
import Footer from './componets/Footer/Footer';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
      <Navbar />
      <Intro/>
      <Services />
      <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
