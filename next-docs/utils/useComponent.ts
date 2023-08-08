import useSWR from 'swr';
import getComponent, { ComponentNames } from '../components/getComponent';

type Props = {
  examples?: any;
  name?: ComponentNames;
  text?: string;
  image?: string;
};

const useComponent = (componentName: ComponentNames): Props => {
  const { name, camelCaseName, text, image } = getComponent(componentName);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(
    `/api/examples?component=${encodeURIComponent(camelCaseName)}`,
    fetcher
  );
  if (!(data && data.examples)) {
    return { examples: 'Loading...', name, text, image };
  }
  return { examples: data.examples, name, text, image };
};

export default useComponent;
