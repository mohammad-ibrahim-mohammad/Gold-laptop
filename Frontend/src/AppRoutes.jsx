import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductReviews from "./ui/ProductReviews";
import ProductDescription from "./ui/ProductDescription";
import FavoritesPage from "./pages/FavoritesPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductsPage from "./pages/ProductsPage";
// import ScrollToTop from "./helpers/ScrollToTop";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route
            path="/categories/:catgeoryId"
            element={<ProductCategoryPage />}
          />
          <Route path="/products/:productId" element={<ProductDetails />}>
            <Route index element={<ProductDescription />} />
            <Route path="reviews" element={<ProductReviews />} />
            <Route path="delivery" element={<p>delivery</p>} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
