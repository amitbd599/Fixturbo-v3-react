import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeOne from "./pages/HomeOne";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home-1" element={<HomeOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
