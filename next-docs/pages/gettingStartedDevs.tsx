import { useState } from 'react';
import DesDevSwitch from '../components/gettingStarted/DesDevSwitch';
import DesGettingStarted from '../components/gettingStarted/DesGettingStarted';
import DevGettingStarted from '../components/gettingStarted/DevGettingStarted';

const PageGettingStartedDevs = () => {
  const [isDesActive, setActive] = useState(false);
  const setDesActive = () => setActive(true);
  const setDevActive = () => setActive(false);
  return (
    <>
      <h1 className="text-moon-32 font-medium">Getting started</h1>
      <DesDevSwitch
        isDesActive={isDesActive}
        setDesActive={setDesActive}
        setDevActive={setDevActive}
      />
      {isDesActive ? <DesGettingStarted /> : <DevGettingStarted />}
    </>
  );
};

export default PageGettingStartedDevs;
