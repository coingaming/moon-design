import { extendTailwindMerge } from 'tailwind-merge';

const mergeClassnames = extendTailwindMerge({
  cacheSize: 0,
  classGroups: {
    borderRadius: [
      {
        rounded: [
          'none',
          'full',
          {
            moon: ['i-xs', 'i-sm', 'i-md', 's-xs', 's-sm', 's-md', 's-lg'],
          },
        ],
      },
    ],
  },
});

export default mergeClassnames;
