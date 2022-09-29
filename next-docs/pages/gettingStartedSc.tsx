import { useState } from 'react';
import DesDevSwitch from '../components/gettingStarted/DesDevSwitch';
import DesGettingStarted from '../components/gettingStarted/DesGettingStarted';
import DevGettingStarted from '../components/gettingStarted/DevGettingStarted';
import ScGettingStarted from '../components/gettingStarted/ScGettingStarted';
import TailwindStyledComponentsSwitch from '../components/gettingStarted/TailwindStyledComponentsSwitch';

const PageGettingStartedSc = () => {
  const [isDesActive, setIsDesActive] = useState(false);
  const [isDevActive, setIsDevActive] = useState(false);
  const [isScActive, setIsScActive] = useState(true);
  const setDesActive = () => setIsDesActive(true);
  const setDevActive = () => setIsDevActive(true);
  const setScActive = () => setIsScActive(true);
  return (
    <>
      <h1 className="text-moon-32 font-medium">Getting started</h1>
      <DesDevSwitch
        isDesActive={isDesActive}
        setDesActive={setDesActive}
        setDevActive={setDevActive}
      />
      <div className="w-full flex flex-col gap-2 text-moon-16">
        <p>Please choose your Framework:</p>
        <TailwindStyledComponentsSwitch
          isTwActive={isDevActive}
          setTwActive={setDevActive}
          setScActive={setScActive}
        />
      </div>
      {isDevActive && <DevGettingStarted />}
      {isScActive && <ScGettingStarted />}
      {isDesActive && <DesGettingStarted />}
    </>
  );
};

export default PageGettingStartedSc;
