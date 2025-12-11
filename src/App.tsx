import { useState } from 'react';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import GridListing from './components/GridListing';
import DetailView from './components/DetailView';
import ResearchView from './components/ResearchView';
import ResearchDetailView from './components/ResearchDetailView';
import { researchCenters, laboratories } from './data/mockData';
import type { Center, Lab, ResearchPublicationDetail } from './types';

type View = 'home' | 'centers' | 'labs' | 'detail' | 'research' | 'researchDetail';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedItem, setSelectedItem] = useState<Center | Lab | null>(null);
  const [selectedPublication, setSelectedPublication] = useState<ResearchPublicationDetail | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Inicio']);

  const handleNavigate = (view: View, item?: Center | Lab) => {
    setCurrentView(view);
    if (view !== 'researchDetail') {
      setSelectedPublication(null);
    }
    if (item) {
      setSelectedItem(item);
      const isCenter = researchCenters.some(c => c.id === item.id);
      if (isCenter) {
        setBreadcrumbs(['Inicio', 'Centros de Investigación', item.name]);
      } else {
        setBreadcrumbs(['Inicio', 'Laboratorios', item.name]);
      }
    } else {
      setSelectedItem(null);
      if (view === 'centers') {
        setBreadcrumbs(['Inicio', 'Centros de Investigación']);
      } else if (view === 'labs') {
        setBreadcrumbs(['Inicio', 'Laboratorios']);
      } else if (view === 'research') {
        setBreadcrumbs(['Inicio', 'Investigaciones Realizadas']);
      } else if (view === 'researchDetail' && selectedPublication) {
        setBreadcrumbs(['Inicio', 'Investigaciones Realizadas', selectedPublication.title]);
      } else {
        setBreadcrumbs(['Inicio']);
      }
    }
  };

  const handleViewPublication = (publication: ResearchPublicationDetail) => {
    setSelectedItem(null);
    setSelectedPublication(publication);
    setCurrentView('researchDetail');
    setBreadcrumbs(['Inicio', 'Investigaciones Realizadas', publication.title]);
  };

  const handleSearch = (query: string, resultItem?: { id: string; type: 'centro' | 'laboratorio' }) => {
    console.log('Búsqueda:', query, resultItem);

    if (resultItem?.type === 'centro') {
      const center = researchCenters.find(c => c.id === resultItem.id);
      if (center) {
        handleNavigate('detail', center);
      }
    } else if (resultItem?.type === 'laboratorio') {
      const lab = laboratories.find(l => l.id === resultItem.id);
      if (lab) {
        handleNavigate('detail', lab);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onNavigate={handleNavigate} onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs items={breadcrumbs} onNavigate={handleNavigate} />

        {currentView === 'home' && (
          <div className="mt-12 text-center">
            <h1 className="text-4xl font-bold text-gray-950 mb-4">Portal de Investigación Universitaria</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra nuestros centros de investigación, laboratorios y las investigaciones más recientes de nuestra comunidad académica.
            </p>
          </div>
        )}

        {currentView === 'centers' && (
          <GridListing
            items={researchCenters}
            title="Centros de Investigación"
            onSelectItem={(item) => handleNavigate('detail', item)}
          />
        )}

        {currentView === 'labs' && (
          <GridListing
            items={laboratories}
            title="Laboratorios"
            onSelectItem={(item) => handleNavigate('detail', item)}
          />
        )}

        {currentView === 'detail' && selectedItem && (
          <DetailView item={selectedItem} />
        )}

        {currentView === 'research' && (
          <ResearchView centers={researchCenters} labs={laboratories} onViewPublication={handleViewPublication} />
        )}

        {currentView === 'researchDetail' && selectedPublication && (
          <ResearchDetailView publication={selectedPublication} />
        )}
      </div>
    </div>
  );
}

export default App;
