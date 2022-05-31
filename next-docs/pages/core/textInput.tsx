import { TextInput, TextInputGroup } from '@heathmont/moon-core-tw';

const inputProps1 = {
  type: 'text',
  inputSize: 'medium',
  placeholder: 'Country',
};

const inputProps2 = {
  type: 'text',
  inputSize: 'medium',
  placeholder: 'Phone',
};

const Example = () => (
  <div className="theme-moon-dark">
    <section className="mt-8 text-3xl font-medium">Sizes</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInputGroup
          inputProps={{
            input1: inputProps1,
            input2: inputProps2,
          }}
        />
      </div>
    </div>

    <section className="mt-8 text-3xl font-medium">Sizes</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="text"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Placeholder"
        />
        <TextInput
          type="text"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Placeholder"
        />
        <TextInput
          type="text"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Placeholder"
        />
      </div>
    </div>

    <section className="mt-12 text-3xl font-medium opacity-moon text-center">
      Text Input Types
    </section>
    <section className="mt-4 text-3xl font-medium opacity-moon">Number</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="number"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="e.g. 1234"
        />
        <TextInput
          type="number"
          inputSize="lg"
          label="Large (lg)"
          placeholder="e.g. 1234"
        />
        <TextInput
          type="number"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="e.g. 1234"
        />
      </div>
    </div>
    <section className="mt-8 text-3xl font-medium opacity-moon">Date</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="date"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Placeholder"
        />
        <TextInput
          type="date"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Placeholder"
        />
        <TextInput
          type="date"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Placeholder"
        />
      </div>
    </div>
    <section className="mt-8 text-3xl font-medium opacity-moon">Time</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="time"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Placeholder"
        />
        <TextInput
          type="time"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Placeholder"
        />
        <TextInput
          type="time"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Placeholder"
        />
      </div>
    </div>
    <section className="mt-8 text-3xl font-medium opacity-moon">
      Date Time
    </section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="datetime-local"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Placeholder"
        />
        <TextInput
          type="datetime-local"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Placeholder"
        />
        <TextInput
          type="datetime-local"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Placeholder"
        />
      </div>
    </div>
    <section className="mt-8 text-3xl font-medium opacity-moon">Email</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="email"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="e.g. jake.weary@sportsbet.io"
        />
        <TextInput
          type="email"
          inputSize="lg"
          label="Large (lg)"
          placeholder="e.g. jake.weary@sportsbet.io"
        />
        <TextInput
          type="email"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="e.g. jake.weary@sportsbet.io"
        />
      </div>
    </div>
    <section className="mt-8 text-3xl font-medium opacity-moon">
      Password
    </section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="password"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Password"
          showPasswordText="Show"
        />
        <TextInput
          type="password"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Password"
          showPasswordText="Show"
        />
        <TextInput
          type="password"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Password"
          showPasswordText="Show"
        />
      </div>
    </div>
    <section className="mt-8 text-3xl font-medium opacity-moon">Search</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="search"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="e.g. EPL"
        />
        <TextInput
          type="search"
          inputSize="lg"
          label="Large (lg)"
          placeholder="e.g. EPL"
        />
        <TextInput
          type="search"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="e.g. EPL"
        />
      </div>
    </div>
    <section className="mt-8 text-3xl font-medium opacity-moon">
      Telephone
    </section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="tel"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="e.g. +372 123 4567"
        />
        <TextInput
          type="tel"
          inputSize="lg"
          label="Large (lg)"
          placeholder="e.g. +372 123 4567"
        />
        <TextInput
          type="tel"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="e.g. +372 123 4567"
        />
      </div>
    </div>
    <section className="mt-8 text-3xl font-medium opacity-moon">Url</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="url"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="e.g. https://sportsbet.io"
        />
        <TextInput
          type="url"
          inputSize="lg"
          label="Large (lg)"
          placeholder="e.g. https://sportsbet.io"
        />
        <TextInput
          type="url"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="e.g. https://sportsbet.io"
        />
      </div>
    </div>

    <section className="mt-12 text-3xl font-medium opacity-moon text-center">
      Text Input Attribute
    </section>

    <section className="mt-4 text-3xl font-medium opacity-moon">
      Disabled
    </section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="text"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Placeholder"
          hintText="Error message"
          disabled
        />
        <TextInput
          type="text"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Placeholder"
          hintText="Error message"
          disabled
        />
        <TextInput
          type="text"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Placeholder"
          hintText="Error message"
          disabled
        />
      </div>
    </div>

    <section className="mt-4 text-3xl font-medium opacity-moon">Error</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="text"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Placeholder"
          hintText="Error message"
          isError
        />
        <TextInput
          type="text"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Placeholder"
          hintText="Error message"
          isError
        />
        <TextInput
          type="text"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Placeholder"
          hintText="Error message"
          isError
        />
      </div>
    </div>

    <section className="mt-4 text-3xl font-medium opacity-moon">
      Readonly
    </section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="text"
          inputSize="md"
          value="Read only text"
          label="Medium (Default: md)"
          placeholder="Placeholder"
          hintText="Error message"
          readOnly
        />
        <TextInput
          type="text"
          inputSize="lg"
          value="Read only text"
          label="Large (lg)"
          placeholder="Placeholder"
          hintText="Error message"
          readOnly
        />
        <TextInput
          type="text"
          inputSize="xl"
          value="Read only text"
          label="Xlarge (xl)"
          placeholder="Placeholder"
          hintText="Error message"
          readOnly
        />
      </div>
    </div>

    <section dir="rtl" className="mt-8 text-3xl font-medium">
      Sizes RTL
    </section>
    <div
      dir="rtl"
      className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded"
    >
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="text"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Placeholder"
          dir={'rtl'}
        />
        <TextInput
          type="text"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Placeholder"
          dir={'rtl'}
        />
        <TextInput
          type="text"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Placeholder"
          dir={'rtl'}
        />
      </div>
    </div>

    <section className="mt-8 text-3xl font-medium">Without Label</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput type="text" inputSize="md" placeholder="Placeholder" />
        <TextInput type="text" inputSize="lg" placeholder="Placeholder" />
        <TextInput type="text" inputSize="xl" placeholder="Placeholder" />
      </div>
    </div>

    <section className="mt-4 text-3xl font-medium opacity-moon">
      Hint message
    </section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="text"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Placeholder"
          hintText="Informative message holder"
        />
        <TextInput
          type="text"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Placeholder"
          hintText="Informative message holder"
        />
        <TextInput
          type="text"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Placeholder"
          hintText="Informative message holder"
        />
      </div>
    </div>

    <section className="mt-4 text-3xl font-medium opacity-moon">
      Input with background color
    </section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-end w-full gap-2">
        <TextInput
          type="text"
          inputSize="md"
          label="Medium (Default: md)"
          placeholder="Placeholder"
          hintText="Informative message holder"
          backgroundColor="bg-goku"
        />
        <TextInput
          type="text"
          inputSize="lg"
          label="Large (lg)"
          placeholder="Placeholder"
          hintText="Informative message holder"
          backgroundColor="bg-goku"
        />
        <TextInput
          type="text"
          inputSize="xl"
          label="Xlarge (xl)"
          placeholder="Placeholder"
          hintText="Informative message holder"
          backgroundColor="bg-goku"
        />
      </div>
    </div>
  </div>
);

export default Example;
