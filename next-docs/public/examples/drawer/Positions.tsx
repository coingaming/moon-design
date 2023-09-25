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
      <Button variant="outline" onClick={handleStartClick}>
        Show Drawer at start of screen
      </Button>
      <Button variant="outline" onClick={handleTopClick}>
        Show Drawer at top of screen
      </Button>
      <Button variant="outline" onClick={handleBottomClick}>
        Show Drawer at bottom of screen
      </Button>
      <Drawer open={isStartOpen} setOpen={setIsStartOpen}>
        <Drawer.Panel position="start">
          <div className="flex justify-between items-center p-3 border-b border-trunks">
            <p>Screen start aligned Drawer</p>
          </div>
          <div className="p-3">Drawer content</div>
        </Drawer.Panel>
      </Drawer>
      <Drawer open={isTopOpen} setOpen={setIsTopOpen}>
        <Drawer.Panel position="top">
          <div className="flex justify-between items-center p-3 border-b border-trunks">
            <p>Screen top aligned Drawer</p>
          </div>
          <div className="p-3">Drawer content</div>
        </Drawer.Panel>
      </Drawer>
      <Drawer open={isBottomOpen} setOpen={setIsBottomOpen}>
        <Drawer.Panel position="bottom">
          <div className="flex justify-between items-center p-3 border-b border-trunks">
            <p>Screen bottom aligned Drawer</p>
          </div>
          <div className="p-3">Drawer content</div>
        </Drawer.Panel>
      </Drawer>
    </>
  );
};

export default Example;
