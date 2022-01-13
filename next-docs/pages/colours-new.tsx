import React from 'react';
import Image from 'next/image';
import coloursImg from '../public/illustartions/colors.png';

const ColorName: React.FC<{}> = ({ children }) => (
  <h2 className="text-2xl">{children}</h2>
);

const ColorUsage: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

interface PalleteColorProp {
  className: string; // eg. bg-piccolo
  value?: 10 | 60 | 100;
  description?: string;
}

const Palette = ({ colors }: { colors: PalleteColorProp[] }) => {
  return (
    <div className="flex gap-4 items-start ">
      {colors.map((color, index) => (
        <div className="flex flex-col justify-center items-center" key={index}>
          <div
            className={`${color.className} w-40 h-40 rounded-xl border border-black`}
          />
          <span>{color.description}</span>
          <span>{color.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function PageColoursNew() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Colours</h1>

        <div className="mt-8 flex flex-row justify-between gap-20">
          <div className="">
            <ColorUsage>
              Our design system is decentralized and built for multi-product
              purposes. Having different-color naming conventions and numbers
              etc... makes it harder to maintain it.
            </ColorUsage>

            <ColorUsage>
              For that, we made a decision to give our colours unique names.
            </ColorUsage>

            <ColorUsage>
              Meet the <span className="font-bold">Dragon Ball Z approach</span>
              .
            </ColorUsage>

            <ColorUsage>
              Each color name is assigned for specific purpose and for each
              product these values are different.
            </ColorUsage>

            <ColorUsage>
              Please never use Hex values, they won't change if you need theme
              support.
            </ColorUsage>
          </div>

          <Image className="rounded-lg" src={coloursImg} alt="Colours usage" />
        </div>
      </section>
      <h2 className="text-3xl font-semibold mt-8">Main colours</h2>
      <section className="mt-8">
        <ColorUsage>Accent colours</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { className: 'bg-piccolo', description: 'piccolo' },
              { className: 'bg-hit', description: 'hit' },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorUsage>Border and line colour</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[{ className: 'bg-beerus', description: 'beerus' }]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorUsage>Background colours</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { className: 'bg-goku', description: 'goku' },
              { className: 'bg-gohan', description: 'gohan' },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorUsage>Text and icon colours</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { className: 'bg-bulma', description: 'bulma' },
              { className: 'bg-trunks', description: 'trunks' },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorUsage>Forced colours</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { className: 'bg-goten', description: 'goten' },
              { className: 'bg-popo', description: 'popo' },
            ]}
          />
        </div>
      </section>
      <h2 className="text-3xl font-semibold mt-8">Supportive colours</h2>
      <section className="mt-8">
        <ColorName>Krillin</ColorName>
        <ColorUsage>Warning colour</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              {
                className: 'bg-krillin',
                description: 'krillin',
                value: 100,
              },
              { className: 'bg-krillin-60', description: 'krillin', value: 60 },
              { className: 'bg-krillin-10', description: 'krillin', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Chi Chi</ColorName>
        <ColorUsage>Error colour</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              {
                className: 'bg-chiChi',
                description: 'chiChi',
                value: 100,
              },
              { className: 'bg-chiChi-60', description: 'chiChi', value: 60 },
              { className: 'bg-chiChi-10', description: 'chiChi', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Roshi</ColorName>
        <ColorUsage>Success colour</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              {
                className: 'bg-roshi',
                description: 'roshi',
                value: 100,
              },
              { className: 'bg-roshi-60', description: 'roshi', value: 60 },
              { className: 'bg-roshi-10', description: 'roshi', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Dodoria</ColorName>
        <div className="mt-4">
          <Palette
            colors={[
              {
                className: 'bg-dodoria',
                description: 'dodoria',
                value: 100,
              },
              { className: 'bg-dodoria-60', description: 'dodoria', value: 60 },
              { className: 'bg-dodoria-10', description: 'dodoria', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Cell</ColorName>
        <div className="mt-4">
          <Palette
            colors={[
              {
                className: 'bg-cell',
                description: 'cell',
                value: 100,
              },
              { className: 'bg-cell-60', description: 'cell', value: 60 },
              { className: 'bg-cell-10', description: 'cell', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Raditz</ColorName>
        <div className="mt-4">
          <Palette
            colors={[
              {
                className: 'bg-raditz',
                description: 'raditz',
                value: 100,
              },
              { className: 'bg-raditz-60', description: 'raditz', value: 60 },
              { className: 'bg-raditz-10', description: 'raditz', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Whis</ColorName>
        <div className="mt-4">
          <Palette
            colors={[
              {
                className: 'bg-whis',
                description: 'whis',
                value: 100,
              },
              { className: 'bg-whis-60', description: 'whis', value: 60 },
              { className: 'bg-whis-10', description: 'whis', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Frieza</ColorName>
        <div className="mt-4">
          <Palette
            colors={[
              {
                className: 'bg-frieza',
                description: 'frieza',
                value: 100,
              },
              { className: 'bg-frieza-60', description: 'frieza', value: 60 },
              { className: 'bg-frieza-10', description: 'frieza', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Nappa</ColorName>
        <div className="mt-4">
          <Palette
            colors={[
              {
                className: 'bg-nappa',
                description: 'nappa',
                value: 100,
              },
              { className: 'bg-nappa-60', description: 'nappa', value: 60 },
              { className: 'bg-nappa-10', description: 'nappa', value: 10 },
            ]}
          />
        </div>
      </section>
    </>
  );
}
