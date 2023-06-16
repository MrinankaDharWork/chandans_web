import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { First, Second, Third } from "./components";

function App() {
  document.body.style.backgroundColor = "#1aab8b";
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
