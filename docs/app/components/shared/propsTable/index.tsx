import HeaderSection from '../HeaderSection';

export type Data = {
  name: string;
  type: string;
  default: string | React.ReactNode;
  description: string;
};

type TableProps = {
  data: Data[];
  title?: string;
  description?: string | JSX.Element;
};

const PropsTable = ({ data, title, description }: TableProps) => {
  return (
    <section>
      <HeaderSection title={title} description={description} />
    </section>
  );
};

export default PropsTable;
