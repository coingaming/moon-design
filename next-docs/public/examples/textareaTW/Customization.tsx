import { Textarea } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex flex-wrap md:flex-nowrap items-center justify-around gap-2 w-full">
      <Textarea
        placeholder="Custom text colours"
        className="text-krillin placeholder:text-whis"
        rows={1}
      />
      <Textarea
        placeholder="Custom border colours"
        className="outline-chiChi hover:outline-piccolo focus:outline-krillin"
        rows={1}
      />
      <Textarea
        placeholder="Custom background colour"
        className="bg-roshi-10"
        rows={1}
      />
    </div>
    <div className="flex flex-wrap md:flex-nowrap items-center justify-around gap-2 w-full">
      <Textarea placeholder="Resize vertically" className="resize-y" rows={3} />
      <Textarea
        placeholder="Resize horizontally"
        className="resize-x"
        rows={3}
      />
      <Textarea
        placeholder="Resize vertically and horizontally"
        className="resize"
        rows={3}
      />
    </div>
  </>
);

export default Example;
