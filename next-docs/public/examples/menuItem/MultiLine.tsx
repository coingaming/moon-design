import { MenuItem } from '@heathmont/moon-core-tw';
import {
  DevicesJoystick,
  GenericLoyalty,
  TravelAirplane,
  TravelBill,
} from '@heathmont/moon-icons-tw';
import { useState } from 'react';

const Example = () => {
  const [activeOpt, setActiveOpt] = useState(true);

  return (
    <div className="w-94 bg-gohan flex flex-col gap-3 rounded-moon-s-lg p-6">
      <MenuItem isActive={activeOpt}>
        <span className="bg-piccolo/20 rounded-lg w-10 h-10 flex justify-center items-center">
          <TravelAirplane className="text-moon-24" color="#4E46B4" />
        </span>
        <MenuItem.MultiTitle
          title="Job Board"
          text={<span>find your dream design job</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="bg-[#3448F01F]/20 rounded-lg w-10 h-10 flex justify-center items-center">
          <TravelBill className="text-moon-24" color="#3448F0" />
        </span>
        <MenuItem.MultiTitle
          title="Freelance Projects"
          text={<span>An exclusive list for contract work</span>}
        />
      </MenuItem>
      <hr className="w-80 border-px border-solid border-beerus left-6 top-40  self-stretch" />
      <MenuItem>
        <span className="bg-[#FFB3191F]/20 rounded-lg w-10 h-10 flex justify-center items-center">
          <GenericLoyalty className="text-moon-24" color="#FFB319" />
        </span>
        <MenuItem.MultiTitle
          title="Want freelance design projects?"
          text={<span>Get new leads in your inbox every day</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="bg-[#FF4E641F]/20 rounded-lg w-10 h-10 flex justify-center items-center">
          <DevicesJoystick className="text-moon-24" color="#FF4E64" />
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
