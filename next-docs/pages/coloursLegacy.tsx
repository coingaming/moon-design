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
  className: string; // eg. bg-piccolo-80
  value: 10 | 40 | 80 | 100 | 120;
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

export default function PageColours() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Colours</h1>

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
              Meet the{' '}
              <span className="font-medium">Dragon Ball Z approach</span>.
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
      <h2 className="text-3xl font-medium mt-8">Main colours</h2>
      <section className="mt-4">
        <ColorName>Piccolo (Primary)</ColorName>
        <ColorUsage>Main button, links etc</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { className: 'bg-piccolo-80', description: 'hover', value: 80 },
              { className: 'bg-piccolo', description: 'default', value: 100 },
              {
                className: 'bg-piccolo-120',
                description: 'active',
                value: 120,
              },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Hit (Secondary)</ColorName>
        <ColorUsage>Secondary button</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { className: 'bg-hit-80', description: 'hover', value: 80 },
              { className: 'bg-hit', description: 'default', value: 100 },
              { className: 'bg-hit-120', description: 'active', value: 120 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Beerus</ColorName>
        <ColorUsage>Border color</ColorUsage>
        <div className="mt-4">
          <Palette colors={[{ className: 'bg-beerus', value: 100 }]} />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Goku</ColorName>
        <ColorUsage>Main background</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { className: 'bg-goku', value: 100 },
              { className: 'bg-goku-80', value: 80 },
              { className: 'bg-goku-40', value: 40 },
              { className: 'bg-goku-10', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Gohan</ColorName>
        <ColorUsage>Secondary background color</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { className: 'bg-gohan', value: 100 },
              { className: 'bg-gohan-80', value: 80 },
              { className: 'bg-gohan-40', value: 40 },
              { className: 'bg-gohan-10', value: 10 },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Goten</ColorName>
        <ColorUsage>
          Button text, promotions card text. Some cases body text or headline
          text.
        </ColorUsage>
        <div className="mt-4">
          <Palette colors={[{ className: 'bg-goten', value: 100 }]} />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Bulma</ColorName>
        <ColorUsage>Main body text</ColorUsage>
        <div className="mt-4">
          <Palette colors={[{ className: 'bg-bulma', value: 100 }]} />
        </div>
      </section>
      <section className="mt-8">
        <ColorName>Trunks</ColorName>
        <ColorUsage>Secondary body text</ColorUsage>
        <div className="mt-4">
          <Palette colors={[{ className: 'bg-trunks', value: 100 }]} />
        </div>
      </section>
      <h2 className="text-3xl font-medium mt-8">Support colours</h2>

      <div className="flex gap-40 flex-wrap items-end">
        <section className="mt-8">
          <ColorName>Krillin</ColorName>
          <ColorUsage>Warning colours</ColorUsage>
          <div className="mt-4">
            <Palette
              colors={[
                { className: 'bg-krillin', value: 100 },
                { className: 'bg-krillin-10', value: 10 },
              ]}
            />
          </div>
        </section>

        <section className="mt-8">
          <ColorName>chiChi</ColorName>
          <ColorUsage>Error colours</ColorUsage>
          <div className="mt-4">
            <Palette
              colors={[
                { className: 'bg-chiChi', value: 100 },
                { className: 'bg-chiChi-10', value: 10 },
              ]}
            />
          </div>
        </section>

        <section className="mt-8">
          <ColorName>Roshi</ColorName>
          <ColorUsage>Success colours</ColorUsage>
          <div className="mt-4">
            <Palette
              colors={[
                { className: 'bg-roshi', value: 100 },
                { className: 'bg-roshi-10', value: 10 },
              ]}
            />
          </div>
        </section>

        <section className="mt-8">
          <ColorName>Popo</ColorName>
          <ColorUsage>Black colour</ColorUsage>
          <div className="mt-4">
            <Palette colors={[{ className: 'bg-popo', value: 100 }]} />
          </div>
        </section>

        <section className="mt-8">
          <ColorName>Dodoria</ColorName>
          <div className="mt-4">
            <Palette
              colors={[
                { className: 'bg-dodoria', value: 100 },
                { className: 'bg-dodoria-10', value: 10 },
              ]}
            />
          </div>
        </section>

        <section className="mt-8">
          <ColorName>Cell</ColorName>
          <div className="mt-4">
            <Palette
              colors={[
                { className: 'bg-cell', value: 100 },
                { className: 'bg-cell-10', value: 10 },
              ]}
            />
          </div>
        </section>

        <section className="mt-8">
          <ColorName>Raditz</ColorName>
          <div className="mt-4">
            <Palette
              colors={[
                { className: 'bg-raditz', value: 100 },
                { className: 'bg-raditz-10', value: 10 },
              ]}
            />
          </div>
        </section>

        <section className="mt-8">
          <ColorName>Whis</ColorName>
          <div className="mt-4">
            <Palette
              colors={[
                { className: 'bg-whis', value: 100 },
                { className: 'bg-whis-10', value: 10 },
              ]}
            />
          </div>
        </section>

        <section className="mt-8">
          <ColorName>Frieza</ColorName>
          <div className="mt-4">
            <Palette
              colors={[
                { className: 'bg-frieza', value: 100 },
                { className: 'bg-frieza-10', value: 10 },
              ]}
            />
          </div>
        </section>

        <section className="mt-8">
          <ColorName>Nappa</ColorName>
          <div className="mt-4">
            <Palette
              colors={[
                { className: 'bg-nappa', value: 100 },
                { className: 'bg-nappa-10', value: 10 },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
}
