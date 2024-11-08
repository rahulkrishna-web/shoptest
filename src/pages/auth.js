import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Auth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const location = useLocation();  // To access query parameters
  const navigate = useNavigate();  // Replaces useHistory in React Router v6

  useEffect(() => {
    // Extract the authorization code and shop from the URL (query params)
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    const shop = queryParams.get('shop');

    // If code and shop exist, proceed with the token exchange request
    if (code && shop) {
      const postAuthData = async () => {
        setLoading(true);
        setError(null);

        try {
          // Trigger the post request to your serverless function
          const res = await fetch('/api/token-exchange', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              code,  // Pass the authorization code
              shop,  // Pass the shop domain
            }),
          });

          const data = await res.json();
          setResponseData(data); // Handle the response data

          // You can navigate the user after successful token exchange
          navigate('/');  // Example: Navigate to the dashboard page

        } catch (err) {
          setError('Error during token exchange');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      postAuthData();  // Call the function to exchange the token
    } else {
      setError('Authorization code or shop not found');
    }
  }, [location, navigate]); // Trigger when the component mounts or the URL changes

  return (
    <div>
      <h1>Authentication Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {responseData && (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )}
    </div>
  );
}

export default Auth;
