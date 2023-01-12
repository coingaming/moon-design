import type LoaderSize from '../../../../loader/private/types/LoaderSize';
import type ButtonSizes from '../../types/ButtonSizes';

const getLoaderSize = (size?: ButtonSizes): LoaderSize => {
  if (size === 'xs') {
    return '2xs';
  }
  return 'xs';
};

export default getLoaderSize;
