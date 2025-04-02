# MotoKrastev - Rent a motorcycle
A React-based application than allows users to rent a motorcycle. The users can register, login, search and browse motorcycle details. Also users can create, edit and delete reviews for current motorcycle.
<br />
The project uses the Express server to handle backend operations and data management.
<br />
Open the Project in Your Browser: <a href="http://localhost:5173/simple-calculator/">MotoKrastev</a>.

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository:
```sh
git clone https://github.com/DanielVKrastev/rent-a-motorcycle-react-project-2025.git
```


2. Navigate to <b>"rental-a-motorcycle"</b> folder, install dependencies and run the app:
```sh
cd rental-a-motorcycle
npm install
npm run dev
```


3. Setting up Google Drive API Locally  
   If you want to upload images to Google Drive, follow the instructions:

   3.1. Enable Google Drive API:  
   - Go to [Google Cloud Console](https://console.cloud.google.com/)  
   - Create a new project or use an existing one  
   - Enable **Google Drive API**  
   - Create a **Service Account** and generate a JSON key file  
   - Open the JSON file and copy the values for `client_email` and `private_key`  

     Example JSON key file:
     ```json
     {
       ...
       "client_email": "your-service-account-email@example.iam.gserviceaccount.com",
       "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEv...your_key_here...\n-----END PRIVATE KEY-----\n"
       ...
     }
     ```

   3.2. Create a `.env` File:  
   Open the server root (`./server-express`) and create a `.env` file. Add your credentials:
   ```sh
   GOOGLE_CLOUD_CLIENT_EMAIL=your-service-account-email@example.iam.gserviceaccount.com
   GOOGLE_CLOUD_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEv...your_key_here...\n-----END PRIVATE KEY-----\n"



4. Open a new terminal windows and navigate to <b>"server-express"</b> folder, install dependencies, and start the server:

```sh
cd server-express
npm install
npm start
```

  <p>Important: Do not shutting down the terminal where the app (the client "rental-a-motorcycle") is running.</p>

5. Open the app (rental-a-motorcycle terminal):
   
    Go to <a href="http://localhost:5173">http://localhost:5173</a> (or the displayed port) in your browser. разбираш ли го ?
