import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { createRouter } from 'next-connect';
import csvParser from 'csv-parser';
import stream from 'stream';
import axios from 'axios';

interface NextApiRequestWithFile extends NextApiRequest {
  file: any;
}

// Set up multer to use memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Initialize next-connect router
const apiRoute = createRouter<NextApiRequestWithFile, NextApiResponse>();

// Use the multer middleware to handle the file upload
apiRoute.use(upload.single('file'));

// Define the POST method handler
apiRoute.post(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const emails: string[] = [];
  const bufferStream = new stream.PassThrough();
  bufferStream.end(req.file.buffer);
  console.log("request madeeeeeee", req.file)
  try {
    await new Promise<void>((resolve, reject) => {
      bufferStream
        .pipe(csvParser())
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
    });

    console.log(emails)

    // Send the emails list to Xano or handle it as needed
    const response = await axios.post('https://your-xano-endpoint.com/api/send-emails', { emails });
    console.log("upload response", response)

    res.status(200).json({ success: true, data: response.data });
  } catch (error) {    
    res.status(500).json({ error: 'Failed to process CSV file' });
  }
});

// Export the handler created by next-connect
export default apiRoute.handler();

// Disable bodyParser since multer handles the file upload
export const config = {
  api: {
    bodyParser: false,
  },
};
