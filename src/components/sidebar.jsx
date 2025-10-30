import React from 'react';

function Sidebar() {
  // Dummy categories data
  const categories = [
    { id: 1, name: "Electronics", icon: "📱" },
    { id: 2, name: "Clothing", icon: "👕" },
    { id: 3, name: "Books", icon: "📚" },
    { id: 4, name: "Home & Garden", icon: "🏡" },
    { id: 5, name: "Sports", icon: "⚽" },
    { id: 6, name: "Beauty", icon: "💄" },
    { id: 7, name: "Toys", icon: "🎮" },
    { id: 8, name: "Automotive", icon: "🚗" },
  ];

  return (
    <div className="h-screen w-64 bg-white light:bg-gray-800 border-r light:border-gray-700 fixed left-0 top-0 pt-20">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 light:text-white mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 light:text-gray-300 rounded-lg hover:bg-gray-100 light:hover:bg-gray-700 transition-colors duration-150"
              >
                <span className="mr-3">{category.icon}</span>
                <span>{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;