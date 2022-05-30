import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Repository } from "./pages/Repository/Repository";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repository />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
