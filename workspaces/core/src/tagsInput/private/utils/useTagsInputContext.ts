import { createContext, useContext } from 'react';
import TagsInputState from '../types/TagsInputState';

const TagsInputContext = createContext<TagsInputState>({});
TagsInputContext.displayName = 'TagsInputContext';

const useTagsInputContext = (component: string) => {
  const context = useContext(TagsInputContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <TagsInput /> component.`
    );
    throw err;
  }
  return context;
};

export { useTagsInputContext, TagsInputContext };
