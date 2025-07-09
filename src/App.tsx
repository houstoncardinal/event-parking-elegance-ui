import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import ClientReviewsPage from "./pages/ClientReviews";
import BookingPage from "./pages/BookingPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDashboardSimple from "./pages/AdminDashboardSimple";
import AdminDashboardFallback from "./pages/AdminDashboardFallback";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/client-reviews" element={<ClientReviewsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin-simple" element={<AdminDashboardSimple />} />
            <Route path="/admin-fallback" element={<AdminDashboardFallback />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
