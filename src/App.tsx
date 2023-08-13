import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/LoginView";
import Navigation from "./components/Navbar";
import Home from "./components/HomeView";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
