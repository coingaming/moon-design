import useSWR from 'swr';

type Tech = 'styled' | 'tailwind';

const useExamples = (componentName: string, tech: Tech = 'tailwind') => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const API_ENDPOINT = tech === 'tailwind' ? 'examples' : 'styledExamples';
  const { data } = useSWR(
    `/api/${API_ENDPOINT}?component=${encodeURIComponent(componentName)}`,
    fetcher
  );

  if (!(data && data.examples)) {
    return 'Loading';
  }
  return data.examples;
};

export default useExamples;
