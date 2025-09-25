import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex-center" style={{ minHeight: '100vh', background: '#f3f4f6' }}>
      <div className="text-center">
        <h1 style={{ marginBottom: '1rem', fontSize: '2.25rem', fontWeight: 'bold' }}>404</h1>
        <p style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#6b7280' }}>Oops! Page not found</p>
        <a 
          href="/" 
          style={{ color: '#3b82f6', textDecoration: 'underline' }}
          onMouseOver={(e) => e.target.style.color = '#1d4ed8'}
          onMouseOut={(e) => e.target.style.color = '#3b82f6'}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;