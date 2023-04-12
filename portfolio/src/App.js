import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Containers/Home";
import Nav from "./Components/Nav";
import Section from "./Components/Section";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Home />
      <Section />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
