import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogListing from './pages/BlogListing';
import BlogFormPage from './pages/BlogFormPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100">
        <Routes>
          <Route path="/" element={<BlogListing />} />
          <Route path="/create" element={<BlogFormPage />} />
          <Route path="/edit/:id" element={<BlogFormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;