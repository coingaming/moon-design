import type { Data } from './index';

type PropsTableItemProps = {
  prop: Data;
};

const PropsTableItem = ({ prop }: PropsTableItemProps) => {
  const { name, type, defaultState, description } = prop;
  return (
    <div className="flex flex-col gap-4 pb-6 relative after:content-[''] after:absolute after:h-px after:bg-beerus after:inset-x-0 after:bottom-0 ">
      <div className="flex w-full items-center gap-6 text-moon-16">
        <span className="w-[8.75rem] min-w-[8.75rem] overflow-hidden whitespace-nowrap text-ellipsis font-semibold">
          Prop
        </span>
        <p>
          <span className="py-1 px-2 bg-frieza-10 text-frieza rounded-moon-i-xs">
            {name}
          </span>
        </p>
      </div>
      <div className="flex w-full items-center gap-6 text-moon-16 ">
        <span className="w-[8.75rem] min-w-[8.75rem] font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
          Default
        </span>
        <p>{defaultState || '-'}</p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:items-center gap-6 text-moon-16 ">
        <span className="md:w-[8.75rem] md:min-w-[8.75rem] font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
          Description
        </span>
        <p>{description}</p>
      </div>
      <div className="md:pl-[8.75rem]">
        <p className="text-moon-16 text-frieza md:pl-6">{type}</p>
      </div>
    </div>
  );
};

export default PropsTableItem;
