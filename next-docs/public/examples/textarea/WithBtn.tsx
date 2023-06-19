import { Textarea, Button } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex flex-col flex-wrap md:flex-nowrap items-center justify-around gap-2 w-full">
      <div className="w-full relative">
        <Textarea
          placeholder="Text area with button"
          className="pb-0 border-b-[4.5rem] border-b-gohan border-solid"
          rows={3}
        />
        <Button className="absolute left-4 bottom-4">Default</Button>
      </div>
      <div className="w-full relative">
        <Textarea
          placeholder="Text area with scaling and button"
          className="resize-y pb-0 border-b-[4.5rem] border-b-gohan border-solid"
          rows={3}
        />
        <Button className="absolute left-4 bottom-4">Default</Button>
      </div>
    </div>
  </>
);

export default Example;
