import { Loader } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around w-full items-center bg-gray-50 py-6 rounded-lg mb-6">
    <Loader color="border-dodoria" />
    <Loader color="border-trunks" />
    <Loader color="border-raditz" />
  </div>
);

export default Example;
