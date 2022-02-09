import useSWR from 'swr';

const API_ENDPOINT = 'transform';

type useTransformProps = {
  svgCode: string;
  name?: string;
  dimensions?: boolean;
};

const useTransform = ({ svgCode, name, dimensions }: useTransformProps) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `/api/${API_ENDPOINT}?svgCode=${encodeURIComponent(
      svgCode
    )}&name=${name}&dimensions=${dimensions}`,
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Only retry up to 4 times.
        if (retryCount >= 4) return;
      },
    }
  );

  return {
    data: data?.jsCode,
    loading: !(data && data.jsCode),
    error: error,
  };
};

export default useTransform;
