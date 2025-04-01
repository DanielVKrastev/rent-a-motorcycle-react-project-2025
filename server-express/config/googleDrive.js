import { google } from 'googleapis';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config(); // env constant

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/drive.file'],
});

const drive = google.drive({ version: 'v3', auth });

// Google Drive file upload feature
async function uploadFile(filePath, fileName) {
    try {
        const fileMetadata = {
            name: fileName,
            mimeType: 'image/png',
        };

        // Loading the file
        const media = {
            mimeType: 'image/png',
            body: fs.createReadStream(filePath),
        };

        const response = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
        });

        // Set access rights (make it public)
        await drive.permissions.create({
            fileId: response.data.id,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
        });

        // Return the public URL of the uploaded image
        const fileUrl = `https://drive.google.com/uc?id=${response.data.id}`;
        return fileUrl;
    } catch (error) {
        console.error('Error uploading file to Google Drive:', error);
        throw new Error('File upload failed.');
    }
}

export { uploadFile };
