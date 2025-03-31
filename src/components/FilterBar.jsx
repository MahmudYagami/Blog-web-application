const FilterBar = ({ onFilter }) => {
    return (
      <div className="flex space-x-4">
        <select
          onChange={(e) => onFilter('category', e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Category</option>
          <option value="Destination">Destination</option>
          <option value="Travel Tips">Travel Tips</option>
        </select>
        <select
          onChange={(e) => onFilter('subCategory', e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Destination</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="Africa">Africa</option>
          <option value="Australia">Australia</option>
          <option value="South America">South America</option>
          <option value="General">General</option>
        </select>
        <select className="p-2 border rounded-md">
          <option value="">Sort by</option>
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
        <button className="px-4 py-2 bg-gray-200 rounded-md">Reset</button>
      </div>
    );
  };
  
  export default FilterBar;