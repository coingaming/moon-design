import { useState } from 'react';
import { Banner } from '@heathmont/moon-core-tw';
import { ControlsClose } from '@heathmont/moon-icons-tw';

const Example = () => {
  const [displayBanner, setDisplayBanner] = useState(true);

  return (
    <>
      <Banner
        title="Merged pull request"
        description="Pull request #9999 merged after a successful build"
        iconHeader={<ControlsClose fontSize="1.5rem" />}
      />
      <div className="mt-4">
        {displayBanner && (
          <Banner
            title="Merged pull request"
            description="Pull request #9999 merged after a successful build"
            iconHeader={
              <ControlsClose
                className="cursor-pointer"
                fontSize="1.5rem"
                onClick={() => setDisplayBanner(false)}
              />
            }
          />
        )}
      </div>
    </>
  );
};

export default Example;
