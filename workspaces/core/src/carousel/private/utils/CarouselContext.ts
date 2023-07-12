import { createContext } from 'react';
import type CarouselState from '../types/CarouselState';

const CarouselContext = createContext<CarouselState>({});
CarouselContext.displayName = 'CarouselContext';

export default CarouselContext;
