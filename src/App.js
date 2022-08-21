import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Quiz from "./pages/Quiz";
import Registration from "./components/Registration";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
