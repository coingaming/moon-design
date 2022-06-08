import React from 'react';
import { useTheme } from '@heathmont/moon-themes';
import ColoursPalette from '../components/ColoursPalette';
import ComponentPageDescription from '../components/ComponentPageDescription';
import PageSection from '../components/PageSection';
import coloursImg from '../public/illustartions/colors.png';

const PageColours = () => {
  const theme = useTheme();
  return (
    <>
      <ComponentPageDescription title="Colours Palette" image={coloursImg}>
        <p>
          Our design system is decentralized and built for multi-product
          purposes. Having different-color naming conventions and numbers etc...
          makes it harder to maintain it.
        </p>
        <p>For that, we made a decision to give our colours unique names.</p>
        <p>
          Meet the <span className="font-medium">Dragon Ball Z approach</span>.
        </p>
        <p>
          Each color name is assigned for specific purpose and for each product
          these values are different.
        </p>
        <p>
          Please never use Hex values, they won't change if you need theme
          support.
        </p>
      </ComponentPageDescription>
      <PageSection title="Main colours">
        <ColoursPalette
          title="Accent colours"
          colors={[
            {
              name: theme.colorNew.piccolo as string,
              description: 'piccolo',
            },
            { name: theme.colorNew.hit as string, description: 'hit' },
          ]}
        />
        <ColoursPalette
          title="Border and line colours"
          colors={[
            { name: theme.colorNew.beerus as string, description: 'beerus' },
          ]}
        />
        <ColoursPalette
          title="Background colours"
          colors={[
            { name: theme.colorNew.goku as string, description: 'goku' },
            { name: theme.colorNew.gohan as string, description: 'gohan' },
          ]}
        />
        <ColoursPalette
          title="Text and icon colours"
          colors={[
            { name: theme.colorNew.bulma as string, description: 'bulma' },
            { name: theme.colorNew.trunks as string, description: 'trunks' },
          ]}
        />
        <ColoursPalette
          title="Forced colours"
          colors={[
            { name: theme.colorNew.goten as string, description: 'goten' },
            { name: theme.colorNew.popo as string, description: 'popo' },
          ]}
        />
      </PageSection>
      <PageSection title="Supportive colours">
        <ColoursPalette
          title="Krillin"
          description="Warning colour"
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
        <ColoursPalette
          title="Chi Chi"
          description="Error colour"
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
        <ColoursPalette
          title="Roshi"
          description="Success colour"
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
        <ColoursPalette
          title="Dodoria"
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
        <ColoursPalette
          title="Cell"
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
        <ColoursPalette
          title="Raditz"
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
        <ColoursPalette
          title="Whis"
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
        <ColoursPalette
          title="Frieza"
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
        <ColoursPalette
          title="Nappa"
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
      </PageSection>
    </>
  );
};

export default PageColours;
