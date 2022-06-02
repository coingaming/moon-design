import React from 'react';
import { useTheme } from '@heathmont/moon-themes';
import Image from 'next/image';
import coloursImg from '../public/illustartions/colors.png';

const ColorName: React.FC<{}> = ({ children }) => (
  <h2 className="text-2xl">{children}</h2>
);

const ColorUsage: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

interface PalleteColorProp {
  name: string;
  value?: 10 | 60 | 100;
  description?: string;
}

const Palette = ({ colors }: { colors: PalleteColorProp[] }) => {
  return (
    <div className="flex gap-4 items-start ">
      {colors.map((color, index) => (
        <div className="flex flex-col justify-center items-center" key={index}>
          <div
            style={{ backgroundColor: color.name }}
            className={`w-40 h-40 rounded-xl border border-black`}
          />
          <span>{color.description}</span>
          <span>{color.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function PageColoursNew() {
  const theme = useTheme();
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Colours</h1>

        <div className="mt-8 flex flex-row justify-between gap-12 xl:gap-20 ">
          <div className="grow">
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

          <div className=" min-w-[40%] lg:min-w-[50%] xl:min-w-[35%] 2xl:min-w-[25%]">
            <div className="max-w-[500px]">
              <Image
                className="rounded-lg"
                src={coloursImg}
                alt="Colours usage"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-3xl font-medium mt-8">Main colours</h2>
      <section className="mt-8">
        <ColorUsage>Accent colours</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              {
                name: theme.colorNew.piccolo as string,
                description: 'piccolo',
              },
              { name: theme.colorNew.hit as string, description: 'hit' },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorUsage>Border and line colour</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { name: theme.colorNew.beerus as string, description: 'beerus' },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorUsage>Background colours</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { name: theme.colorNew.goku as string, description: 'goku' },
              { name: theme.colorNew.gohan as string, description: 'gohan' },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorUsage>Text and icon colours</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { name: theme.colorNew.bulma as string, description: 'bulma' },
              { name: theme.colorNew.trunks as string, description: 'trunks' },
            ]}
          />
        </div>
      </section>
      <section className="mt-8">
        <ColorUsage>Forced colours</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              { name: theme.colorNew.goten as string, description: 'goten' },
              { name: theme.colorNew.popo as string, description: 'popo' },
            ]}
          />
        </div>
      </section>
      <h2 className="text-3xl font-medium mt-8">Supportive colours</h2>
      <section className="mt-8">
        <ColorName>Krillin</ColorName>
        <ColorUsage>Warning colour</ColorUsage>
        <div className="mt-4">
          <Palette
            colors={[
              {
                name: theme.colorNew.krillin[100] as string,
                description: 'krillin',
                value: 100,
              },
              {
                name: theme.colorNew.krillin[60] as string,
                description: 'krillin',
                value: 60,
              },
              {
                name: theme.colorNew.krillin[10] as string,
                description: 'krillin',
                value: 10,
              },
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
                name: theme.colorNew.chiChi[100] as string,
                description: 'chiChi',
                value: 100,
              },
              {
                name: theme.colorNew.chiChi[60] as string,
                description: 'chiChi',
                value: 60,
              },
              {
                name: theme.colorNew.chiChi[10] as string,
                description: 'chiChi',
                value: 10,
              },
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
                name: theme.colorNew.roshi[100] as string,
                description: 'roshi',
                value: 100,
              },
              {
                name: theme.colorNew.roshi[60] as string,
                description: 'roshi',
                value: 60,
              },
              {
                name: theme.colorNew.roshi[10] as string,
                description: 'roshi',
                value: 10,
              },
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
                name: theme.colorNew.dodoria[100] as string,
                description: 'dodoria',
                value: 100,
              },
              {
                name: theme.colorNew.dodoria[60] as string,
                description: 'dodoria',
                value: 60,
              },
              {
                name: theme.colorNew.dodoria[10] as string,
                description: 'dodoria',
                value: 10,
              },
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
                name: theme.colorNew.cell[100] as string,
                description: 'cell',
                value: 100,
              },
              {
                name: theme.colorNew.cell[60] as string,
                description: 'cell',
                value: 60,
              },
              {
                name: theme.colorNew.cell[10] as string,
                description: 'cell',
                value: 10,
              },
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
                name: theme.colorNew.raditz[100] as string,
                description: 'raditz',
                value: 100,
              },
              {
                name: theme.colorNew.raditz[60] as string,
                description: 'raditz',
                value: 60,
              },
              {
                name: theme.colorNew.raditz[10] as string,
                description: 'raditz',
                value: 10,
              },
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
                name: theme.colorNew.whis[100] as string,
                description: 'whis',
                value: 100,
              },
              {
                name: theme.colorNew.whis[60] as string,
                description: 'whis',
                value: 60,
              },
              {
                name: theme.colorNew.whis[10] as string,
                description: 'whis',
                value: 10,
              },
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
                name: theme.colorNew.frieza[100] as string,
                description: 'frieza',
                value: 100,
              },
              {
                name: theme.colorNew.frieza[60] as string,
                description: 'frieza',
                value: 60,
              },
              {
                name: theme.colorNew.frieza[10] as string,
                description: 'frieza',
                value: 10,
              },
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
                name: theme.colorNew.nappa[100] as string,
                description: 'nappa',
                value: 100,
              },
              {
                name: theme.colorNew.nappa[60] as string,
                description: 'nappa',
                value: 60,
              },
              {
                name: theme.colorNew.nappa[10] as string,
                description: 'nappa',
                value: 10,
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
