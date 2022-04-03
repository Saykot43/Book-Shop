import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Review from "./components/Review/Review";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog.jsx";
import Not404 from "./components/Not404/Not404";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/review" element={<Review />} />
        <Route path="*" element={<Not404 />} />
      </Routes>
    </div>
  );
}

export default App;
