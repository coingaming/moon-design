import { createContext, useContext, useState } from 'react';

const RtlContext = createContext({
  rtlEnabled: false,
  toggleRtl: () => {},
});

const RtlProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rtlEnabled, setRtlEnabled] = useState(false);
  const toggleRtl = () => {
    const htmlTag = document && document?.querySelectorAll('html')[0];
    setRtlEnabled(!rtlEnabled);
    rtlEnabled
      ? htmlTag.setAttribute('dir', 'ltr')
      : htmlTag.setAttribute('dir', 'rtl');
  };
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
