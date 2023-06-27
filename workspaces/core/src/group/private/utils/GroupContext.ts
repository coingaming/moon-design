import { createContext } from 'react';
import type GroupState from '../types/GroupState';

const GroupContext = createContext<GroupState>({});
GroupContext.displayName = 'GroupContext';

export default GroupContext;
