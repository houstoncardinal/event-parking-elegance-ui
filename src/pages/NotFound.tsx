import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="text-8xl font-bold text-gold-500 mb-4">404</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for doesn't exist. Let us help you find what you need.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-lg font-semibold rounded-xl"
            >
              Go to Homepage
            </Button>
            
            <div className="text-sm text-gray-500">
              Or try one of these popular pages:
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/services'}
                className="text-sm"
              >
                Our Services
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/contact'}
                className="text-sm"
              >
                Contact Us
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/booking'}
                className="text-sm"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
