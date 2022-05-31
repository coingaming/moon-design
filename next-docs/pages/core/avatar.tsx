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

    <section className="mt-8 text-3xl font-bold">Different colours</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Avatar />
        <Avatar color="text-goten" backgroundColor="bg-piccolo" />
        <Avatar color="text-goten" backgroundColor="bg-chiChi" />
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Different sizes</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex flex-col w-full">
        <div className="flex justify-around items-center w-full mb-4">
          <Avatar size="xs" />
          <Avatar size="sm" />
          <Avatar />
          <Avatar size="lg" />
          <Avatar size="xl" />
          <Avatar size="2xl" />
        </div>
        <div className="flex justify-around items-center w-full mb-4">
          <Avatar name="JS" size="xs" />
          <Avatar name="JS" size="sm" />
          <Avatar name="JS" />
          <Avatar name="JS" size="lg" />
          <Avatar name="JS" size="xl" />
          <Avatar name="JS" size="2xl" />
        </div>
        <div className="flex justify-around items-center w-full">
          <Avatar imageUrl="https://www.fillmurray.com/200/200" size="xs" />
          <Avatar imageUrl="https://www.fillmurray.com/200/200" size="sm" />
          <Avatar imageUrl="https://www.fillmurray.com/200/200" />
          <Avatar imageUrl="https://www.fillmurray.com/200/200" size="lg" />
          <Avatar imageUrl="https://www.fillmurray.com/200/200" size="xl" />
          <Avatar imageUrl="https://www.fillmurray.com/200/200" size="2xl" />
        </div>
      </div>
    </div>
  </div>
);

export default Example;
