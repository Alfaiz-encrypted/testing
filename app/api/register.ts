// pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Extract data from the request body
      const { username, email, password } = req.body;

      console.log('Registration data:', { username, email, password });

      // Respond with a success message or relevant data
      res.status(200).json({ success: true, message: 'Registration successful' });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
