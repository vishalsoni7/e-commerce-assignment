import { Route, Routes } from "react-router-dom";

import { Landing } from "./pages/Landing";

import "./App.css";
import { Cart } from "./pages/Cart";
import { Header } from "./pages/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
