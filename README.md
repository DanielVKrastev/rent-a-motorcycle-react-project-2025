# MotoKrastev - Rent a motorcycle
A React-based application than allows users to rent a motorcycle. The users can register, login, search and browse motorcycle details. Also users can create, edit and delete reviews for current motorcycle.
<br />
The project uses the Express server to handle backend operations and data management.
<br />
Open the Project in Your Browser: <a href="https://moto-krastev-rentals.web.app/" target="_blank">MotoKrastev</a>.

## 📦 Getting Started

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
   -  Navigate to IAM & Admin > Service Accounts
      - In the left menu, go to IAM & Admin > Service Accounts.
      - Click Create Service Account.
   - Fill in the Service Account details - Enter a name for the service account (e.g., my-app-service-account).
   -  Assign Roles (Permissions) - Owner
   -  Generate a JSON Key:
      - After creating the service account, open its details.
      - Go to the Keys tab.
      - Click Add Key > Create new key.
      - Select JSON and click Create.
   - Download the JSON Key File.
   - Open the JSON file and copy the values for `client_email` and `private_key`

<div align="center">
   <h4>Create Project</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/create-project.png" width="100%">
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/create-project-2.png" width="51%">
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/create-project-3.png" width="46%">
</div>

<div align="center">
   <h4>Select Project</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/select-project.png" width="50%">
</div>

<div align="center">
   <h4>APIs & Services</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/api-services.png" width="100%">
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/enabled-apis.png" width="32%">
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/google-drive-api.png" width="100%">
</div>

<div align="center">
   <h4>Create Service Account</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/iam-admin.png" width="32%">
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/create-service-account.png" width="80%">
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/created-service.png" width="100%">
</div>

<div align="center">
   <h4>Create Key</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/create-key.png" width="80%">
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/google-drive-api/download-key-json.png" width="45%">
</div>


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
   ```



4. Open a new terminal windows and navigate to <b>"server-express"</b> folder, install dependencies, and start the server:

```sh
cd server-express
npm install
npm start
```

  <p>Important: Do not shutting down the terminal where the app (the client "rental-a-motorcycle") is running.</p>

5. Open the app (rental-a-motorcycle terminal):
   
    Go to <a href="http://localhost:5173">http://localhost:5173</a> (or the displayed port) in your browser.

## 🛠 Used Technologies
- JavaScript: Core language for the functionality of the application.
- React: Front-end framework used for building the user interface and handling the application logic.
- TailwindCSS: Utility-first CSS framework for fast styling and responsive design.
- Heroicons: A set of free, open-source high-quality SVG icons, designed to work seamlessly with TailwindCSS.
- Flowbite: UI component library based on TailwindCSS for building modern interfaces.
- Date-fns: Modern JavaScript date utility library for manipulating dates.
- Leaflet: JavaScript library for interactive maps. Used for embedding and customizing maps in the application.
- React-Leaflet: A React wrapper for Leaflet that allows seamless integration of maps with React.
- Lucide-React: A set of beautiful, open-source icons designed for React.
- React Datepicker: A flexible and customizable date picker for React.
- React Icons: A library of customizable icons for React, providing a wide variety of options.
- React Router: Routing library for handling navigation within a React application, providing dynamic routing capabilities.
- React Router DOM: The DOM bindings for React Router, allowing seamless client-side routing in web applications.
- Serve: Static file serving and directory listing for web applications.
- Vite: Next-generation, fast build tool for modern web applications, used to bundle and serve the project.
- TailwindCSS Vite Plugin: A plugin that enables TailwindCSS to be used efficiently with Vite.

## 📌 Users for testing
- Users:
     - Email: admin@motokrastev.com; password: admin (role: Admin)
     - Email: peter@gmail.com; password: 123456 (role: User)
     - Email: daniel@gmail.com; password: 123456 (role: User)
## 🚀 Features
### Authentication
   - Register: Users can register, providing Username Email, Password and Confirm Password - an error message is shown when the requirements are not met.
   - Login: Users can log in to their account after it has been created.
   - Logout: Users can log out of their accounts after they have been logged in.
   - Access Restriction: Logged-in users are redirected to the homepage if they try to access the Login or Register pages. This ensures that authenticated users cannot access these pages.
<div>
   <h4>Login page</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/login.png">
</div>
<div>
   <h4>Register page</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/register.png">
</div>

### Navigations
- **Home**: Redirects to the Home page.  
- **Rent a Motorcycle**: Redirects to the Motorcycle Catalog page.  
- **About**: Redirects to the About page.  

#### **User Authentication Links:**
- **Guest** (not logged in):
  - **Log In**: Redirects to the Login page.  
  - **Register**: Redirects to the Registration page.  

- **User** (logged in):
  - **Profile**: Redirects to the Profile page *(includes settings, rented motorcycles, comments, support requests)*.  
  - **Motorcycle Details**: Redirects to the Motorcycle Details page.  
  - **Checkout**: Redirects to the Checkout page.  
  - **Logout**: Logs the user out.  

- **Admin** (admin access required):
  - **Admin Panel**: Redirects to the Admin Dashboard page.

<div>
   <h4>Guest navigation</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/guest-navbar.png">
</div>
<div>
   <h4>User navigation</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/user-navbar.png">
</div>
<div>
   <h4>Admin navigation</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/admin-navbar.png">
</div>

  ### Home Page
- **Get Started Header** – Welcomes users with a brief introduction and a call to action.  
- **Why Choose Our Motorbike Rental** – Lists the benefits of using our service.  
- **Most Popular Motorcycles** – Displays the top rented motorcycles with images and details.
<div>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/home.png">
</div>

  ### Rent a motorcycle page
This page allows users to browse and select motorcycles for rent.

- **Filter by Brand** – Enables users to filter motorcycles based on their preferred brand.  
- **Motorcycle List** – Displays available motorcycles with key details such as model, price, and availability.  
- **Pagination** – Allows users to navigate through multiple pages of motorcycle listings.
<div>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/rent-a-moto.png">
</div>

  ### Details and rented page
This page provides detailed information about a selected motorcycle and allows users to proceed with the rental process.

- **Left Side – Details, Add-ons, and Comments** - Displays motorcycle specifications, additional features, and user reviews.  
- **Right Side – Rental Box** - Shows the rental price and allows users to select rental dates.  
- **Most Popular Motorcycles** - Displays the top rented motorcycles with images and key details.
- **Date Selection** - If users select dates that are already reserved, a message will appear informing them that the selected dates are unavailable for rental.
<div>
   <h4>Details and rented page</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/rent-a-moto-details.png">
</div>
<div>
   <h4>Comments in details</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/comments.png">
</div>

| Rental box - dates | Rental box - busy dates | Message for busy dates |
|--------------------|----------------------|----------------------|
| ![Rental box - dates](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/date-picker.png) | ![Rental box - busy dates](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/date-picker-2.png) | ![Rental box - message for busy dates](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/date-picker-busy.png) |

### Checkout Page  
The Checkout page allows logged-in users to complete their rental booking.

- **Left Side – Driver Details & Terms and Conditions**  
  - Users enter their driver information and agree to the terms and conditions.  

- **Right Side – Checkout Summary & Payment**  
  - Displays the total rental cost and payment details.  
  - Includes a **Pay** button to confirm the booking.  
<div>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/checkout.png">
</div>
<div>
   <h4>Success reservation message</h4>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/checkout-success.png">
</div>

### Search Page  
The Search page allows users to find motorcycles based on their criteria.

- **Motorcycle List** – Displays search results with key details such as model, price, and availability.  
- **Pagination** – Enables users to navigate through multiple pages of search results.

<div>
   <img src="https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/search.png">
</div>

### Profile Page  
The Profile page allows users to edit their profile, view rented motorcycles, see created comments, and manage support requests.

| Settings | Rented Motorcycles |
|----------|--------------------|
| ![Settings](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/user-settings.png) | ![Rented Motorcycles](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/user-rented.png) |

| Rented Motorcycles Details | Created Comments |
|----------------------------|------------------|
| ![Rented Motorcycles Details](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/user-rented-details.png) | ![Created Comments](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/user-comments.png) |

| User Support Requests |
|-----------------------|
| ![User Support Requests](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/user-query.png) |

### Admin Panel  
The Admin page allows admins (users with the "admin" role) to perform CRUD operations on data related to Users, Motorcycles, Reservations, Comments, and Customer Requests.

| Admin Dashboard | Admin Dashboard Users | Admin Dashboard Motorcycles |
|-----------------|-----------------------|-----------------------------|
| ![Admin Dashboard](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/admin-dashboard.png) | ![Admin Dashboard Users](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/admin-dashboard-users.png) | ![Admin Dashboard Motorcycles](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/admin-dashboard-motorcycle.png) |

| Admin Dashboard Reservations | Admin Dashboard Reservations Edit | Admin Dashboard Comments |
|------------------------------|----------------------------------|--------------------------|
| ![Admin Dashboard Reservations](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/admin-dashboard-reservations2.png) | ![Admin Dashboard Reservations Edit](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/admin-dashboard-edit-reservation.png) | ![Admin Dashboard Comments](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/admin-dashboard-comments.png) |

| Admin Customer Requests |
|-------------------------|
| ![Admin Customer Requests](https://raw.githubusercontent.com/DanielVKrastev/rent-a-motorcycle-react-project-2025/main/rental-a-motorcycle/screenshots/admin-dashboard-queries.png) |


