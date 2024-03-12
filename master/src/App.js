import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageOne from "./pages/HomePageOne";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import TeamPage from "./pages/TeamPage";
import TeamDetailsPage from "./pages/TeamDetailsPage";
import ShopPage from "./pages/ShopPage";
import ShopDetailsPage from "./pages/ShopDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import ContactPage from "./pages/ContactPage";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import HomePageFour from "./pages/HomePageFour";
import HomePageFive from "./pages/HomePageFive";
import HomePageSix from "./pages/HomePageSix";
import HomePageRTLOne from "./pages/HomePageRTLOne";
import HomePageRTLTwo from "./pages/HomePageRTLTwo";
import HomePageRTLThree from "./pages/HomePageRTLThree";
import HomePageRTLFour from "./pages/HomePageRTLFour";
import HomePageRTLFive from "./pages/HomePageRTLFive";
import HomePageRTLSix from "./pages/HomePageRTLSix";
function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#E8092E" />
      <Routes>
        <Route exact path="/home-1" element={<HomePageOne />} />
        <Route exact path="/home-1-rtl" element={<HomePageRTLOne />} />
        <Route exact path="/home-2" element={<HomePageTwo />} />
        <Route exact path="/home-2-rtl" element={<HomePageRTLTwo />} />
        <Route exact path="/home-3" element={<HomePageThree />} />
        <Route exact path="/home-3-rtl" element={<HomePageRTLThree />} />
        <Route exact path="/home-4" element={<HomePageFour />} />
        <Route exact path="/home-4-rtl" element={<HomePageRTLFour />} />
        <Route exact path="/home-5" element={<HomePageFive />} />
        <Route exact path="/home-5-rtl" element={<HomePageRTLFive />} />
        <Route exact path="/home-6" element={<HomePageSix />} />
        <Route exact path="/home-6-rtl" element={<HomePageRTLSix />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/service" element={<ServicePage />} />
        <Route exact path="/service-details" element={<ServiceDetailsPage />} />
        <Route exact path="/project" element={<ProjectPage />} />
        <Route exact path="/project-details" element={<ProjectDetailsPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/team-details" element={<TeamDetailsPage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/shop-details" element={<ShopDetailsPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/wishlist" element={<WishlistPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
