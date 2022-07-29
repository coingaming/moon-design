import { Button} from "@heathmont/moon-core-tw";
import DialogFooter from "@heathmont/moon-core-tw/lib/dialog/Footer";

const Example = () =>{
  return (
    <div className="w-1/2 flex flex-col items-center">
      <div className="w-full bg-beerus rounded-lg mt-4 py-4">
        <DialogFooter
          rightButtons={[
            <Button variant='secondary'>Label</Button>,
            <Button>Confirm</Button>
          ]}
        />
      </div>
      <div className="w-full bg-beerus rounded-lg mt-4 py-4">
        <DialogFooter
          leftButtons={[
            <Button variant='secondary'>Label</Button>,
          ]}
        />
      </div>
      <div className="w-full bg-beerus rounded-lg mt-4 py-4">
        <DialogFooter
          leftButtons={[
            <Button variant='tertiary'>Label 1</Button>,
            <Button variant='secondary'>Label 2</Button>,
          ]}
          rightButtons={[
            <Button variant='ghost'>Label</Button>,
            <Button>Confirm</Button>
          ]}
        />
      </div>
    </div>
  );
}

export default Example;
