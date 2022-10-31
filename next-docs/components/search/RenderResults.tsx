import React from 'react';
import { KBarResults, useMatches } from 'kbar';

const RenderResults: React.FC = () => {
  const { results } = useMatches();
  if (results.length) {
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) => {
          if (!item) return <></>;
          return (
            <div>
              {typeof item === 'string' ? (
                <div className="pt-3">
                  <div className="block border-t border-gray-100 px-4 pt-6 pb-2 text-xs font-medium uppercase text-slate-400">
                    {item}
                  </div>
                </div>
              ) : (
                <div
                  className={`block cursor-pointer px-4 py-2 text-slate-600 ${
                    active ? 'bg-gray-100' : 'bg-transparent'
                  }`}
                >
                  {item.subtitle && (
                    <div className="text-xs text-slate-400">
                      {item.subtitle}
                    </div>
                  )}
                  <div>{item.name}</div>
                </div>
              )}
            </div>
          );
        }}
      />
    );
  }
  return (
    <div className="block border-t border-gray-100 px-4 py-8 text-center text-slate-400">
      No results for your search...
    </div>
  );
};

export default RenderResults;
