import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogList from '../components/BlogList';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';

const BlogListing = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ category: '', subCategory: '', search: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const blogsPerPage = 6;

  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5174/api/blogs', { // Updated port to 5174
        params: {
          page,
          limit: blogsPerPage,
          ...filters,
        },
      });
      console.log('Fetched blogs response:', response.data); // Log the response for debugging
      setBlogs(response.data.blogs || []);
      setTotalPages(response.data.totalPages || 1);
      setCurrentPage(response.data.currentPage || 1);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to fetch blogs. Please ensure the backend server is running on port 5174 and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage, filters]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5174/api/blogs/${id}`); // Updated port to 5174
      const totalBlogsAfterDelete = blogs.length - 1;
      const newTotalPages = Math.ceil(totalBlogsAfterDelete / blogsPerPage);
      
      if (blogs.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } else {
        fetchBlogs(currentPage);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleSearch = (query) => {
    setFilters({ ...filters, search: query });
    setCurrentPage(1);
  };

  const handleFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="flex justify-between mb-6">
        <SearchBar onSearch={handleSearch} />
        <button
          onClick={() => navigate('/create')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Post New Blog
        </button>
      </div>
      <FilterBar onFilter={handleFilter} />
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && blogs.length === 0 && (
        <p className="text-center text-gray-500">No blogs found.</p>
      )}
      {!loading && !error && blogs.length > 0 && (
        <BlogList blogs={blogs} onDelete={handleDelete} />
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BlogListing;