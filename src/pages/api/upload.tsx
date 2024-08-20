import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter, expressWrapper } from 'next-connect';
import multer from 'multer';
import csvParser from 'csv-parser';
import axios from 'axios';

interface NextApiRequestWithFile extends NextApiRequest {
    file: multer.File;
  }
// Setup multer to use memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Initialize next-connect
const apiRoute = createRouter<NextApiRequestWithFile, NextApiResponse>();

// Middleware to handle file upload
apiRoute.use(upload.single('file'));

apiRoute.post(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const emails: string[] = [];
  const stream = req.file.buffer.toString('utf8');

  try {
    await new Promise<void>((resolve, reject) => {
      const csvStream = csvParser()
        .on('data', (row) => {
          if (row.email) {
            emails.push(row.email);
          }
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (err) => {
          reject(err);
        });

      stream.pipe(csvStream);
    });

    // Send the emails list to Xano
    const response = await axios.post('https://your-xano-endpoint.com/api/send-emails', { emails });

    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process CSV file' });
  }
});

// Disable bodyParser since multer handles the file upload
export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;
