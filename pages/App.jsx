import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/projects" element={<div>Project</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/resume" element={<div>Resume</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
