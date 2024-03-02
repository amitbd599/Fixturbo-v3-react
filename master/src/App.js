import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageOne from "./pages/HomePageOne";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#E8092E" />
      <Routes>
        <Route exact path="/home-1" element={<HomePageOne />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/service" element={<ServicePage />} />
        <Route exact path="/service-details" element={<ServiceDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
