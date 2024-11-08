// api/token-exchange.js
export default async (req, res) => {
    if (req.method === 'POST') {
      const { code, shop } = req.body;  // Get the code and shop from the request body
  
      const postData = {
        client_id: process.env.REACT_APP_SHOPIFY_API_KEY,  // Use server-side environment variable
        client_secret: process.env.SHOPIFY_API_SECRET,
        code: code,  // The authorization code from Shopify
      };
  
      // Prepare the POST request to exchange the code for the access token
      const response = await fetch(`https://${shop}/admin/oauth/access_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      const data = await response.json();
  
      // Send the response back to the client
      res.status(200).json(data);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  };
  