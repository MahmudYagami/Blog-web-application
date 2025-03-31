# Travel Blog Application

This is a full-stack travel blog application built with React for the frontend and Express.js for the backend. The application allows users to browse travel blog posts, search and filter them by title, author, or destination, create new blog posts, edit existing ones, and delete posts. It supports pagination, multiple image uploads for blog posts, and a responsive design. The backend uses an in-memory data store for simplicity, running on your local PC as the server.

## Features
- **Blog Listing:** View a paginated list of blog posts with search and filter functionality.
- **Search:** Search blog posts by title, author name, category, or sub-category.
- **Create/Edit Blogs:** Create new blog posts or edit existing ones with a form that supports multiple image uploads.
- **Image Previews:** Preview uploaded images during blog creation and editing.
- **Delete Blogs:** Delete blog posts from the listing page.
- **Responsive Design:** The app is styled with Tailwind CSS for a responsive and modern UI.

## Technologies Used
### Frontend:
- **React:** JavaScript library for building the user interface.
- **React Router:** For client-side routing (e.g., navigating between blog listing, create, and edit pages).
- **Axios:** For making HTTP requests to the backend API.
- **Tailwind CSS:** For styling the application with a utility-first approach.
- **Heroicons:** For icons (e.g., search, likes, comments).
- **Vite:** Build tool and development server for fast React development.

### Backend:
- **Express.js:** Node.js framework for building the REST API.
- **In-Memory Data Store:** Stores blog data in memory (using a JavaScript array) on the local server.

### Development Tools:
- **Node.js:** JavaScript runtime for running the development server and building the app.
- **npm:** Package manager for installing dependencies.
- **Git:** Version control system for managing the codebase.

## Prerequisites
To run this project on your local PC, ensure you have the following installed:
- **Node.js (v16 or higher):** Download and install from [nodejs.org](https://nodejs.org/).
- **npm (comes with Node.js):** Used to install dependencies.
- **Git:** For cloning the repository. Download from [git-scm.com](https://git-scm.com/).

## Setup Instructions
Follow these steps to run the project on your local PC.

### 1. Clone the Repository
Clone the project repository to your local machine:
```bash
git clone https://github.com/MahmudYagami/Blog-web-application.git
cd blog-app
```

### 2. Set Up the Backend (Express.js Server)
The backend is an Express.js server that runs on your local PC and uses an in-memory data store to manage blog posts.

#### Navigate to the Backend Directory:
```bash
cd backend
```

#### Install Backend Dependencies:
```bash
npm install
```

#### Start the Backend Server:
```bash
node server.js
```
The server will start on `http://localhost:5174`.
You should see the message: `Server running on http://localhost:5174`.

### 3. Set Up the Frontend (React App)
The frontend is a React application that communicates with the Express.js backend.

#### Navigate to the Frontend Directory:
If you’re in the backend directory, go back to the root directory:
```bash
cd ..
```

#### Install Frontend Dependencies:
```bash
npm install
```

#### Update API Calls:
Ensure all API calls in the frontend point to the local Express.js server (`http://localhost:5174`). The following files should already be configured, but verify:

**src/pages/BlogListing.jsx:**
```jsx
const response = await axios.get('http://localhost:5174/api/blogs', {
  params: {
    page,
    limit: blogsPerPage,
    ...filters,
  },
});
```

**src/components/BlogForm.jsx:**
```jsx
// For fetching a blog
const response = await axios.get(`http://localhost:5174/api/blogs/${id}`);

// For creating a blog
await axios.post('http://localhost:5174/api/blogs', dataToSubmit);

// For updating a blog
await axios.put(`http://localhost:5174/api/blogs/${id}`, dataToSubmit);
```

**src/pages/BlogListing.jsx (delete operation):**
```jsx
await axios.delete(`http://localhost:5174/api/blogs/${id}`);
```

#### Start the Frontend Development Server:
Run the React app:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173` (or the port shown in the terminal).
Open your browser and navigate to `http://localhost:5173` to see the blog application.

---

