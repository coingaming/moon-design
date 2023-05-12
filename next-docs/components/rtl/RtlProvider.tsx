import { createContext, useContext, useEffect, useState } from 'react';

const RtlContext = createContext({
  rtlEnabled: false,
  toggleRtl: () => {},
});

const RtlProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rtlEnabled, setRtlEnabled] = useState(false);
  const toggleRtl = () => {
    setRtlEnabled(!rtlEnabled);
  };
  useEffect(() => {
    const htmlTag = document && document?.querySelectorAll('html')[0];
    rtlEnabled
      ? htmlTag.setAttribute('dir', 'rtl')
      : htmlTag.setAttribute('dir', 'ltr');
  }, [rtlEnabled]);
  return (
    <RtlContext.Provider
      value={{
        rtlEnabled,
        toggleRtl,
      }}
    >
      {children}
    </RtlContext.Provider>
  );
};

export const useRtl = () => useContext(RtlContext);

export default RtlProvider;
