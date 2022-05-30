import { Avatar } from '@heathmont/moon-core-tw';

const Example = () => (
  <div>
    <section className="mt-8 text-3xl font-bold">Sizes</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Avatar />
        <Avatar name="JS" />
        <Avatar imageUrl="https://www.fillmurray.com/200/200" />
      </div>
    </div>
  </div>
);

export default Example;
