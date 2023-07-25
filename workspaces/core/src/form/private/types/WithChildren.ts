import { ReactNode } from 'react';

type WithChildren<T = {}> = T & { children?: ReactNode };

export default WithChildren;
