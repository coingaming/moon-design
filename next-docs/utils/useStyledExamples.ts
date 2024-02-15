import useSWR from 'swr';

const useStyledExamples = (componentName: string) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(
    `/api/styledExamples?component=${encodeURIComponent(componentName)}`,
    fetcher
  );
  if (!(data && data.examples)) {
    return 'Loading';
  }
  return data.examples;
};

export default useStyledExamples;
