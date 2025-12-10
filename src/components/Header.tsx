import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SearchBar from './SearchBar';

interface HeaderProps {
  onNavigate: (view: 'home' | 'centers' | 'labs' | 'detail' | 'research') => void;
  onSearch: (query: string, resultItem?: { id: string; type: 'centro' | 'laboratorio' }) => void;
}

function Header({ onNavigate, onSearch }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-blue-100 shadow-sm">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8"
      style={{paddingLeft: 150, paddingRight: 150}}>
        <div className="flex flex-row py-4 justify-between">
          <div className="flex flex-row justify-between "
          style={{gap: 32}}>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-600 hover:text-primary-blue hover:border-primary-blue border-b-2 border-transparent transition-colors"
            >
              Inicio
            </button>
            <button className="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-600 hover:text-primary-blue hover:border-primary-blue border-b-2 border-transparent transition-colors">
              Institucional
            </button>
            <button className="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-600 hover:text-primary-blue hover:border-primary-blue border-b-2 border-transparent transition-colors">
              Admisión Pregrado
            </button>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center px-3 pt-1 text-base font-bold text-primary-blue bg-blue-100 hover:bg-blue-300 border-b-2 border-primary-blue transition-colors h-full"
              >
                Investigación y Laboratorios
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-0 w-64 bg-white border border-blue-100 shadow-lg z-50">
                  <button
                    onClick={() => {
                      onNavigate('centers');
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base text-gray-950 hover:bg-blue-100 transition-colors"
                  >
                    Centros de Investigación
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('labs');
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base text-gray-950 hover:bg-blue-100 border-t border-blue-100 transition-colors"
                  >
                    Laboratorios
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('research');
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-base text-gray-950 hover:bg-blue-100 border-t border-blue-100 transition-colors"
                  >
                    Investigaciones Realizadas
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center lg:w-auto lg:justify-end lg:items-center lg:flex-none">
            <SearchBar
              onSearch={onSearch}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
