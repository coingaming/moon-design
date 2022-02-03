import useSWR from 'swr';

const API_ENDPOINT = 'transform';

type useTransformProps = {
  svgCode: string;
  name?: string;
  dimensions?: boolean;
};
const useTransform = ({ svgCode, name, dimensions }: useTransformProps) => {
  try {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data } = useSWR(
      `/api/${API_ENDPOINT}?svgCode=${encodeURIComponent(
        svgCode
      )}&name=${name}&dimensions=${dimensions}`,
      fetcher
    );

    if (!(data && data.jsCode)) {
      console.log('Loading');
      return null;
    }
    console.log('data', data);
    return data?.jsCode;
  } catch (error) {
    console.log(error);
  }
};

export default useTransform;
