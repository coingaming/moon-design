import React, { useState } from 'react';
import { Button, Drawer } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const handleStartClick = () => setIsStartOpen(true);
  const handleTopClick = () => setIsTopOpen(true);
  const handleBottomClick = () => setIsBottomOpen(true);
  return (
    <>
      <Button variant="secondary" onClick={handleStartClick}>
        Show Drawer at start of screen
      </Button>
      <Button variant="secondary" onClick={handleTopClick}>
        Show Drawer at top of screen
      </Button>
      <Button variant="secondary" onClick={handleBottomClick}>
        Show Drawer at bottom of screen
      </Button>
      {isStartOpen && (
        <Drawer isOpen={isStartOpen} setIsOpen={setIsStartOpen}>
          <Drawer.Panel position="start">Start aligned Drawer</Drawer.Panel>
        </Drawer>
      )}
      {isTopOpen && (
        <Drawer isOpen={isTopOpen} setIsOpen={setIsTopOpen}>
          <Drawer.Panel position="top">Top aligned Drawer</Drawer.Panel>
        </Drawer>
      )}
      {isBottomOpen && (
        <Drawer isOpen={isBottomOpen} setIsOpen={setIsBottomOpen}>
          <Drawer.Panel position="bottom">Bottom aligned Drawer</Drawer.Panel>
        </Drawer>
      )}
    </>
  );
};

export default Example;
