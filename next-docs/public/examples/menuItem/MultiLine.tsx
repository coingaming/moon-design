import { MenuItem } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';
import { useState } from 'react';

const Example = () => {
  const [activeOpt, setActiveOpt] = useState(true);

  return (
    <div className="w-94 bg-gohan flex flex-col gap-3 rounded-moon-s-lg p-6">
      <MenuItem isActive={activeOpt}>
        <span className="bg-piccolo/10 rounded-moon-i-sm w-10 h-10 flex justify-center items-center">
          <OtherFrame className="text-moon-24 text-piccolo" />
        </span>
        <MenuItem.MultiTitle
          title="Job Board"
          text={<span>find your dream design job</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="bg-piccolo/10 rounded-moon-i-sm w-10 h-10 flex justify-center items-center">
          <OtherFrame className="text-moon-24 text-piccolo" />
        </span>
        <MenuItem.MultiTitle
          title="Freelance Projects"
          text={<span>An exclusive list for contract work</span>}
        />
      </MenuItem>
      <hr className="border-top border-beerus" />
      <MenuItem>
        <span className="bg-krillin-10 rounded-moon-i-sm w-10 h-10 flex justify-center items-center">
          <OtherFrame className="text-moon-24 text-krillin" />
        </span>
        <MenuItem.MultiTitle
          title="Want freelance design projects?"
          text={<span>Get new leads in your inbox every day</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="bg-chichi-10 rounded-moon-i-sm w-10 h-10 flex justify-center items-center">
          <OtherFrame className="text-moon-24 text-chichi" />
        </span>
        <MenuItem.MultiTitle
          title="Personalized your profile with video"
          text={<span>Introduce yourself to new clients with Pitch</span>}
        />
      </MenuItem>
    </div>
  );
};

export default Example;
