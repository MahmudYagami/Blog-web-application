import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/react/24/outline';

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    authorName: '',
    blogTitle: '',
    publicationDate: '',
    category: '',
    subCategory: '',
    summary: '',
    mainContent: '',
    travelTags: '',
    image: '',
    additionalImages: [],
  });
  const [newImages, setNewImages] = useState([]); // For new image uploads
  const [previewImages, setPreviewImages] = useState([]); // For previewing new images

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(`http://localhost:5174/api/blogs/${id}`);
          setFormData(response.data);
          setPreviewImages(response.data.additionalImages || []);
        } catch (error) {
          console.error('Error fetching blog:', error);
        }
      };
      fetchBlog();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImageUrls = files.map(file => URL.createObjectURL(file));
    setNewImages([...newImages, ...files]);
    setPreviewImages([...previewImages, ...newImageUrls]);
  };

  const handleRemoveImage = (index) => {
    const updatedPreviewImages = previewImages.filter((_, i) => i !== index);
    const updatedNewImages = newImages.filter((_, i) => i !== index);
    setPreviewImages(updatedPreviewImages);
    setNewImages(updatedNewImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSubmit = {
        ...formData,
        additionalImages: previewImages, 
      };

      if (id) {
        // Update existing blog
        await axios.put(`http://localhost:5174/api/blogs/${id}`, dataToSubmit);
      } else {
        // Create new blog
        await axios.post('http://localhost:5174/api/blogs', dataToSubmit);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{id ? 'Edit Blog' : 'Blog Form'}</h2>
      <form onSubmit={handleSubmit}>
        {/* Author Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Author Name:</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the name of the blog author"
          />
        </div>

        {/* Blog Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title:</label>
          <input
            type="text"
            name="blogTitle"
            value={formData.blogTitle}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the title of blog post"
          />
        </div>

        {/* Publication Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Publication Date:</label>
          <input
            type="date"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select other options</option>
            <option value="Destination">Destination</option>
            <option value="Travel Tips">Travel Tips</option>
          </select>
        </div>

        {/* Sub-category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Sub-category:</label>
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select multiple options</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="North America">North America</option>
            <option value="Africa">Africa</option>
            <option value="Australia">Australia</option>
            <option value="South America">South America</option>
            <option value="General">General</option>
          </select>
        </div>

        {/* Summary */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Type here"
          />
        </div>

        {/* Travel Tags */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Travel tags:</label>
          <input
            type="text"
            name="travelTags"
            value={formData.travelTags}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter travel tags"
          />
        </div>

        {/* Main Content */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Main Content:</label>
          <textarea
            name="mainContent"
            value={formData.mainContent}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            placeholder="Write your blog content here"
          />
        </div>

        {/* Images Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Images Upload:</label>
          <div className="flex items-center space-x-2">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md cursor-pointer hover:bg-gray-300"
            >
              Choose files to upload
            </label>
          </div>
          {/* Image Preview */}
          {previewImages.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {previewImages.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            type="button"
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            onClick={() => navigate('/')}
          >
            Preview
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            onClick={() => console.log('Autosave')}
          >
            Autosave
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;