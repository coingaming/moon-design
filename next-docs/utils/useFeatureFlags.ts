import { useMemo } from 'react';

export const ELIXIR_BASE_URL =
  process.env.NEXT_PUBLIC_ELIXIR_BASE_URL || 'http://localhost:4000/';

/*
  "process.env.NEXT_PUBLIC_ELIXIR_ENABLED"
  is prefixed "NEXT_PUBLIC_" because of
  https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order
*/
const isElixirEnabled =
  process.env.NEXT_PUBLIC_ELIXIR_ENABLED === 'true' || false;

type FeatureFlags = {
  isElixirEnabled: boolean;
};

const useFeatureFlags: () => FeatureFlags = () => {
  const memoizedFeatureFlags = useMemo(
    () => ({
      isElixirEnabled,
    }),
    []
  );

  return memoizedFeatureFlags;
};

export default useFeatureFlags;
