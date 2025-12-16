import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home', { replace: true });
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div>
      Page not found. Redirecting to home in 3 seconds...
    </div>
  );
};

export default NotFound;
