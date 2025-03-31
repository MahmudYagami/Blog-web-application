import BlogCard from './BlogCard';

const BlogList = ({ blogs, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BlogList;