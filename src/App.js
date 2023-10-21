import { useContext } from "react";
import { ECContext } from "./context/ECContext";

import { Routers } from "./component/routers";

import { Header } from "./pages/Header";

import "./App.css";

function App() {
  const {
    ecState: { logged },
  } = useContext(ECContext);

  return (
    <div className="App">
      {logged !== null && logged === true && <Header />}

      <Routers />
    </div>
  );
}

export default App;
