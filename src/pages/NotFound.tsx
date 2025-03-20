import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-sand/10 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-serif text-navy mb-2">404</h1>
        <p className="text-2xl text-navy/70 mb-6">Page Not Found</p>
        <p className="text-navy/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="premium">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
