import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { createRouter } from 'next-connect';
import csvParser from 'csv-parser';
import stream from 'stream';
import axios from 'axios';

interface NextApiRequestWithFile extends NextApiRequest {
    file: multer.File;
  }
  const upload = multer({ storage: multer.memoryStorage() });

  const apiRoute = createRouter<NextApiRequest, NextApiResponse>();
  
  apiRoute.use(upload.single('file'));
  
  apiRoute.post(async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    const emails: string[] = [];
    const bufferStream = new stream.PassThrough();
    bufferStream.end(req.file.buffer);
  
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
  
      // Send the emails list to Xano or handle it as needed
      const response = await axios.post('https://your-xano-endpoint.com/api/send-emails', { emails });
  
      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      res.status(500).json({ error: 'Failed to process CSV file' });
    }
  });
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };

export default apiRoute;
