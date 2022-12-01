import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beanz from "./components/Beanz";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import World from "./components/World";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beanz" element={<Beanz />} />
          <Route path="/world" element={<World />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
