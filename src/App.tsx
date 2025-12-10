
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FireCatProject from "./pages/FireCatProject";
import SportRetailProject from "./pages/SportRetailProject";
import WorkwearProject from "./pages/WorkwearProject";
import HockeyProject from "./pages/HockeyProject";
import PetProject from "./pages/PetProject";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/projects/firecat" element={<FireCatProject />} />
              <Route path="/projects/sport-retail" element={<SportRetailProject />} />
              <Route path="/projects/workwear" element={<WorkwearProject />} />
              <Route path="/projects/hockey" element={<HockeyProject />} />
              <Route path="/projects/pet-tracker" element={<PetProject />} />
              <Route path="/tech-details" element={<TechDetails />} />
              <Route path="/development-process" element={<DevelopmentProcess />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
