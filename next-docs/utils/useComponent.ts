import useSWR from 'swr';
import getComponent, { ComponentNames } from '../components/getComponent';

type Props = {
  examples?: any;
  name?: ComponentNames;
  text?: string;
  image?: string;
};

const useComponent = (componentName: ComponentNames): Props => {
  const { name, text, image } = getComponent(componentName);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(
    `/api/examples?component=${encodeURIComponent(componentName)}`,
    fetcher
  );
  const examples = data?.examples;
  return { examples, name, text, image };
};

export default useComponent;
