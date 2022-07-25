import React from 'react';
import { KBarResults, useMatches } from 'kbar';

const RenderResults: React.FC = () => {
  const { results } = useMatches();

  if (results.length) {
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) => (
          <div>
            {typeof item === 'string' ? (
              <div className="pt-3">
                <div className="block border-t border-gray-100 px-4 pt-6 pb-2 text-xs font-semibold uppercase text-slate-400 dark:border-gray-800 dark:text-slate-500">
                  {item}
                </div>
              </div>
            ) : (
              <div
                className={`block cursor-pointer px-4 py-2 text-slate-600 dark:text-slate-300 ${
                  active ? 'bg-gray-100 dark:bg-gray-800' : 'bg-transparent'
                }`}
              >
                {item.subtitle && (
                  <div className="text-xs text-slate-400 dark:text-slate-500">
                    {item.subtitle}
                  </div>
                )}
                <div>{item.name}</div>
              </div>
            )}
          </div>
        )}
      />
    );
  }
  return (
    <div className="block border-t border-gray-100 px-4 py-8 text-center text-slate-400 dark:border-gray-800 dark:text-slate-600">
      No results for your search...
    </div>
  );
};

export default RenderResults;
