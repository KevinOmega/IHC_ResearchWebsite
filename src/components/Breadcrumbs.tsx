import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: string[];
  onNavigate: (view: 'home' | 'centers' | 'labs' | 'detail' | 'research') => void;
}

function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  const getViewForBreadcrumb = (item: string): 'home' | 'centers' | 'labs' | 'research' => {
    if (item === 'Inicio') return 'home';
    if (item === 'Centros de Investigación') return 'centers';
    if (item === 'Laboratorios') return 'labs';
    if (item === 'Investigaciones Realizadas') return 'research';
    return 'home';
  };

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-gray-600 mx-2" />}
          {index === items.length - 1 ? (
            <span className="text-gray-950 font-medium">{item}</span>
          ) : (
            <button
              onClick={() => {
                const view = getViewForBreadcrumb(item);
                onNavigate(view);
              }}
              className="text-primary-blue hover:text-blue-500 transition-colors"
            >
              {item}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
