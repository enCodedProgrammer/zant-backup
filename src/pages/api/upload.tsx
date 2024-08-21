import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { createRouter } from 'next-connect';
import csvParser from 'csv-parser';
import stream from 'stream';
import axios from 'axios';

interface NextApiRequestWithFile extends NextApiRequest {
  file: any;
  authToken: any;
}

const upload = multer({ storage: multer.memoryStorage() });

const apiRoute = createRouter<NextApiRequestWithFile, NextApiResponse>();


apiRoute.use(upload.single('file'));

apiRoute.post(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

    const authToken = req.headers['authorization']?.split(' ')[1];

    if (!authToken) {
      return res.status(400).json({ error: 'No authToken provided' });
    }

    

  console.log("auth received", req.authToken)
  const email_address: string[] = [];
  const bufferStream = new stream.PassThrough();
  bufferStream.end(req.file.buffer);
  console.log("request madeeeeeee", req.file)
  try {
    await new Promise<void>((resolve, reject) => {
      bufferStream
        .pipe(csvParser())
        .on('data', (row) => {
          if (row.email) {
            email_address.push(row.email);
          }
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (err) => {
          reject(err);
        });
    });

    console.log("array", email_address)

    const response = await axios.post('https://xxnw-3kjn-ltca.n7c.xano.io/api:dRDS80y8/upload/csv_array',  {email_address: email_address}, {
			headers: {
			  Authorization: `Bearer ${authToken}`,
			},
		  });
    console.log("upload response", response)

    res.status(200).json({ success: true, data: response.data });
  } catch (error) {    
    res.status(500).json({ error: 'Failed to process CSV file' });
  }
});

export default apiRoute.handler();

// Disable bodyParser since multer handles the file upload
export const config = {
  api: {
    bodyParser: false,
  },
};
