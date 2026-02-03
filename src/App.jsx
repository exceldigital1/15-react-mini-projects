import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import OtpGenerator from "./pages/OtpGenerator";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/otp" element={<OtpGenerator/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
