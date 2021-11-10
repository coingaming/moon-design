import useSWR from 'swr';

const API_ENDPOINT = 'examples';

const useExamples = (componentName: string) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
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
