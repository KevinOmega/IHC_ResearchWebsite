import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Center, Lab } from '../types';

interface GridListingProps {
  items: (Center | Lab)[];
  title: string;
  onSelectItem: (item: Center | Lab) => void;
}

function GridListing({ items, title, onSelectItem }: GridListingProps) {
  const [sortedItems, setSortedItems] = useState([...items].sort((a, b) => b.popularity - a.popularity));

  const handleSort = () => {
    const sorted = [...sortedItems].sort((a, b) => b.popularity - a.popularity);
    setSortedItems(sorted);
  };

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) as keyof typeof Icons];
    return IconComponent ? <IconComponent className="h-12 w-12 text-primary-blue" /> : null;
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-950">{title}</h1>
        <button
          onClick={handleSort}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-950 bg-white border border-blue-100 rounded-lg hover:bg-blue-100 transition-colors"
        >
          <ArrowUpDown className="h-4 w-4" />
          <span>Ordenar por popularidad</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              {getIcon(item.logo)}
            </div>
            <h3 className="text-lg font-bold text-gray-950 mb-2 text-center">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-4 text-center line-clamp-3">{item.description}</p>
            <button
              onClick={() => onSelectItem(item)}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-primary-blue rounded-lg hover:bg-blue-500 transition-colors"
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridListing;
