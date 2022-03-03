import "./App.css";
//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

//import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const URL = "https://warm-basin-64427.herokuapp.com/";
  return (
    <div className="App fill-window">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
