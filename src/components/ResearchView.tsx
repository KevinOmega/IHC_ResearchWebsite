import { FileText, Building2, FlaskConical } from 'lucide-react';
import type { Center, Lab } from '../types';

interface ResearchViewProps {
  centers: Center[];
  labs: Lab[];
}

function ResearchView({ centers, labs }: ResearchViewProps) {
  const allPublications = [
    ...centers.flatMap(c => c.publications.map(p => ({ ...p, source: c.name, type: 'Centro' }))),
    ...labs.flatMap(l => l.publications.map(p => ({ ...p, source: l.name, type: 'Laboratorio' })))
  ].sort((a, b) => b.year - a.year);

  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold text-gray-950 mb-6">Investigaciones Realizadas</h1>
      <p className="text-base text-gray-600 mb-8">
        Explore las publicaciones más recientes de nuestros centros de investigación y laboratorios.
      </p>

      <div className="space-y-4">
        {allPublications.map((pub, index) => (
          <div key={index} className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <FileText className="h-6 w-6 text-primary-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-950 mb-2">{pub.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="font-medium">{pub.journal}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  {pub.type === 'Centro' ? (
                    <Building2 className="h-4 w-4 text-gray-600" />
                  ) : (
                    <FlaskConical className="h-4 w-4 text-gray-600" />
                  )}
                  <span className="text-sm text-gray-600">{pub.source}</span>
                  <span className="text-xs text-gray-600 bg-blue-100 px-2 py-1 rounded">
                    {pub.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchView;
