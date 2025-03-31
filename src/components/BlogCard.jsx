import { useNavigate } from 'react-router-dom';
import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const BlogCard = ({ blog, onDelete }) => {
  const navigate = useNavigate();

  // Split travelTags into an array
  const tags = blog.travelTags ? blog.travelTags.split(',').map(tag => tag.trim()) : [];

  // Placeholder additional images
  const additionalImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  ];

  // Format the publication date
  const formattedDate = new Date(blog.publicationDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-5">
      {/* Main Image */}
      <img
        src={blog.image}
        alt={blog.blogTitle}
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2">{blog.blogTitle}</h3>

        {/* Tags */}
        <div className="flex space-x-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p className="text-gray-600 text-sm mb-2">
          {blog.summary.length > 100
            ? `${blog.summary.substring(0, 100)}...`
            : blog.summary}
        </p>

        {/* Read More Link */}
        <button
          onClick={() => navigate(`/blog/${blog.id}`)}
          className="text-blue-600 font-medium text-sm hover:underline mb-4"
        >
          READ MORE
        </button>

        {/* Likes and Comments */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <HeartIcon className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600 text-sm">300</span>
          </div>
          <div className="flex items-center space-x-1">
            <ChatBubbleLeftIcon className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600 text-sm">124</span>
          </div>
        </div>

        {/* Additional Images */}
        <div className="flex space-x-2 mb-4">
          {additionalImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Additional image ${index + 1}`}
              className="w-1/3 h-20 object-cover rounded"
            />
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={blog.authorImage}
              alt={blog.authorName}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-medium text-sm">{blog.authorName}</p>
              <p className="text-gray-500 text-xs">Published on {formattedDate}</p>
            </div>
          </div>
          <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            FOLLOW
          </button>
        </div>

        {/* Edit and Delete Buttons*/}
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => navigate(`/edit/${blog.id}`)}
            className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(blog.id)}
            className="px-3 py-1 bg-red-200 text-red-800 text-sm rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;