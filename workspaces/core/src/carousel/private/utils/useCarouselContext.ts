import { useContext } from 'react';
import CarouselContext from './CarouselContext';

const useCarouselContext = (component: string) => {
  const context = useContext(CarouselContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Carousel /> component.`
    );
    throw err;
  }
  return context;
};

export default useCarouselContext;
