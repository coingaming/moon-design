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
          isGrayBg
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
          isGrayBg
          preview={<Number />}
          code={examples ? examples.Number : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Date"
          isGrayBg
          preview={<Date />}
          code={examples ? examples.Date : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Time"
          isGrayBg
          preview={<Time />}
          code={examples ? examples.Time : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Date Time"
          isGrayBg
          preview={<DateTime />}
          code={examples ? examples.DateTime : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Email"
          isGrayBg
          preview={<Email />}
          code={examples ? examples.Email : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Password"
          isGrayBg
          preview={<Password />}
          code={examples ? examples.Password : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Search"
          isGrayBg
          preview={<Search />}
          code={examples ? examples.Search : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Telephone"
          isGrayBg
          preview={<Telephone />}
          code={examples ? examples.Telephone : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Url"
          isGrayBg
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
          isGrayBg
          preview={<Disabled />}
          code={examples ? examples.Disabled : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Error"
          isGrayBg
          preview={<Error />}
          code={examples ? examples.Error : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Readonly"
          isGrayBg
          preview={<Readonly />}
          code={examples ? examples.Readonly : 'Loading'}
        />
      </section>

      <section dir="rtl" className="mt-8 text-3xl font-medium">
        Sizes RTL
      </section>
      <div
        dir="rtl"
        className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded"
      ></div>

      <section className="mt-8">
        <Preview
          title="Sizes RTL"
          isGrayBg
          preview={<SizesRTL />}
          code={examples ? examples.SizesRTL : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Without Label"
          isGrayBg
          preview={<WithoutLabel />}
          code={examples ? examples.WithoutLabel : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Hint message"
          isGrayBg
          preview={<Hint />}
          code={examples ? examples.Hint : 'Loading'}
        />
      </section>

      <section className="mt-8">
        <Preview
          title="Input with background color"
          isGrayBg
          preview={<Bg />}
          code={examples ? examples.Bg : 'Loading'}
        />
      </section>
    </div>
  );
};

export default Example;
