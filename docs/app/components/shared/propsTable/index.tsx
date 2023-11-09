import PropsTableItem from './PropsTableItem';
import HeaderSection from '../HeaderSection';

export type Data = {
  name: string;
  type: string;
  defaultState: string | React.ReactNode;
  description: string;
};

type TableProps = {
  data: Data[];
  title?: string;
  description?: string | JSX.Element;
};

const PropsTable = ({ data, title, description }: TableProps) => {
  return (
    <section className="flex flex-col gap-6">
      <HeaderSection title={title} description={description} className="pb-6" />
      <hr className="h-px bg-beerus w-full" />
      {data.map((prop: Data) => (
        <PropsTableItem prop={prop} key={prop.name} />
      ))}
    </section>
  );
};

export default PropsTable;
