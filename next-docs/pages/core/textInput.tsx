import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Bg from '../../public/examples/textInputTW/Bg';
import Date from '../../public/examples/textInputTW/Date';
import DateTime from '../../public/examples/textInputTW/DateTime';
import Disabled from '../../public/examples/textInputTW/Disabled';
import Email from '../../public/examples/textInputTW/Email';
import Error from '../../public/examples/textInputTW/Error';
import Hint from '../../public/examples/textInputTW/Hint';
import Number from '../../public/examples/textInputTW/Number';
import Password from '../../public/examples/textInputTW/Password';
import Readonly from '../../public/examples/textInputTW/Readonly';
import Search from '../../public/examples/textInputTW/Search';
import Sizes from '../../public/examples/textInputTW/Sizes';
import SizesRTL from '../../public/examples/textInputTW/SizesRTL';
import Telephone from '../../public/examples/textInputTW/Telephone';
import Time from '../../public/examples/textInputTW/Time';
import Url from '../../public/examples/textInputTW/Url';
import WithoutLabel from '../../public/examples/textInputTW/WithoutLabel';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('textInputTW');
  return (
    <div className="theme-moon-light">
      <section className="mt-8">
        <Preview
          title="Sizes"
          preview={<Sizes />}
          code={examples ? examples.Sizes : 'Loading'}
        />
      </section>

      <section className="mt-12 text-3xl font-medium opacity-moon text-center">
        Text Input Types
      </section>
      <section className="mt-8">
        <Preview
          title="Number"
          preview={<Number />}
          code={examples ? examples.Number : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Date"
          preview={<Date />}
          code={examples ? examples.Date : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Time"
          preview={<Time />}
          code={examples ? examples.Time : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Date Time"
          preview={<DateTime />}
          code={examples ? examples.DateTime : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Email"
          preview={<Email />}
          code={examples ? examples.Email : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Password"
          preview={<Password />}
          code={examples ? examples.Password : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Search"
          preview={<Search />}
          code={examples ? examples.Search : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Telephone"
          preview={<Telephone />}
          code={examples ? examples.Telephone : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Url"
          preview={<Url />}
          code={examples ? examples.Url : 'Loading'}
        />
      </section>

      <section className="mt-12 text-3xl font-medium opacity-moon text-center">
        Text Input Attribute
      </section>

      <section className="mt-8">
        <Preview
          title="Disabled"
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Error"
          preview={<Error />}
          code={examples ? examples.Error : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Readonly"
          preview={<Readonly />}
          code={examples ? examples.Readonly : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Sizes RTL"
          preview={<SizesRTL />}
          code={examples ? examples.SizesRTL : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Without Label"
          preview={<WithoutLabel />}
          code={examples ? examples.WithoutLabel : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Hint message"
          preview={<Hint />}
          code={examples ? examples.Hint : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Input with background color"
          preview={<Bg />}
          code={examples ? examples.Bg : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
