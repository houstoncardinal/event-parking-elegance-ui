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
import WeddingValet from "./pages/WeddingValet";
import CorporateEvents from "./pages/CorporateEvents";
import PrivateParties from "./pages/PrivateParties";
import PremiumProtection from "./pages/PremiumProtection";
import FAQ from "./pages/FAQ";
import FileClaim from "./pages/FileClaim";
import AboutUs from "./pages/AboutUs";
import EventPackages from "./pages/EventPackages";
import Careers from "./pages/Careers";
import JobApplication from "./pages/JobApplication";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
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
            <Route path="/about" element={<AboutUs />} />
            <Route path="/event-packages" element={<EventPackages />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/job-application/:jobTitle" element={<JobApplication />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/file-claim" element={<FileClaim />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/wedding-valet" element={<WeddingValet />} />
            <Route path="/corporate-events" element={<CorporateEvents />} />
            <Route path="/private-parties" element={<PrivateParties />} />
            <Route path="/premium-protection" element={<PremiumProtection />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin-simple" element={<AdminDashboardSimple />} />
            <Route path="/admin-fallback" element={<AdminDashboardFallback />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
