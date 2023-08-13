import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/LoginView";
import Navigation from "./components/Navbar";
import Home from "./components/HomeView";
import Create from "./components/SignupView";
import Games from "./components/GamesView";
import GuessLang from "./components/GuessLangView";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Create />} />
        <Route path="/games" element={<Games />} />
        <Route path="/guessthelanguage" element={<GuessLang />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
