// components/FilterButtons.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter);

  const filters = [
    { key: 'ALL', label: 'All' },
    { key: 'ACTIVE', label: 'Active' },
    { key: 'COMPLETED', label: 'Completed' }
  ];

  return (
    <div className="px-6 py-4 bg-white border-b">
      <div className="max-w-2xl mx-auto">
        <div className="flex space-x-2">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => dispatch(setFilter(filter.key))}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentFilter === filter.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;