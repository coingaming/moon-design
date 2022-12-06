import React from 'react';
import ColoursPalette from '../components/ColoursPalette';
import ComponentPageDescription from '../components/ComponentPageDescription';
import PageSection from '../components/PageSection';
import coloursImg from '../public/illustartions/colors.png';

const PageColours = () => (
  <>
    <ComponentPageDescription title="Colours" image={coloursImg}>
      <p>
        Our design system is decentralized and built for multi-product purposes.
        Having different-color naming conventions and numbers etc... makes it
        harder to maintain it.
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
            name: 'bg-piccolo',
            description: 'piccolo',
          },
          { name: 'bg-hit', description: 'hit' },
        ]}
      />
      <ColoursPalette
        title="Border and line colours"
        colors={[{ name: 'bg-beerus', description: 'beerus' }]}
      />
      <ColoursPalette
        title="Background colours"
        colors={[
          { name: 'bg-goku', description: 'goku' },
          { name: 'bg-gohan', description: 'gohan' },
        ]}
      />
      <ColoursPalette
        title="Text and icon colours"
        colors={[
          { name: 'bg-bulma', description: 'bulma' },
          { name: 'bg-trunks', description: 'trunks' },
        ]}
      />
      <ColoursPalette
        title="Forced colours"
        colors={[
          { name: 'bg-goten', description: 'goten' },
          { name: 'bg-popo', description: 'popo' },
        ]}
      />
    </PageSection>
    <PageSection title="Supportive colours">
      <ColoursPalette
        title="Krillin"
        description="Warning colour"
        colors={[
          {
            name: 'bg-krillin',
            description: 'krillin',
          },
          {
            name: 'bg-krillin-60',
            description: 'krillin-60',
          },
          {
            name: 'bg-krillin-10',
            description: 'krillin-10',
          },
        ]}
      />
      <ColoursPalette
        title="Chi Chi"
        description="Error colour"
        colors={[
          {
            name: 'bg-chiChi',
            description: 'chiChi',
          },
          {
            name: 'bg-chiChi-60',
            description: 'chiChi-60',
          },
          {
            name: 'bg-chiChi-10',
            description: 'chiChi-10',
          },
        ]}
      />
      <ColoursPalette
        title="Roshi"
        description="Success colour"
        colors={[
          {
            name: 'bg-roshi',
            description: 'roshi',
          },
          {
            name: 'bg-roshi-60',
            description: 'roshi-60',
          },
          {
            name: 'bg-roshi-10',
            description: 'roshi-10',
          },
        ]}
      />
      <ColoursPalette
        title="Dodoria"
        colors={[
          {
            name: 'bg-dodoria',
            description: 'dodoria',
          },
          {
            name: 'bg-dodoria-60',
            description: 'dodoria-60',
          },
          {
            name: 'bg-dodoria-10',
            description: 'dodoria-10',
          },
        ]}
      />
      <ColoursPalette
        title="Cell"
        colors={[
          {
            name: 'bg-cell',
            description: 'cell',
          },
          {
            name: 'bg-cell-60',
            description: 'cell-60',
          },
          {
            name: 'bg-cell-10',
            description: 'cell-10',
          },
        ]}
      />
      <ColoursPalette
        title="Raditz"
        colors={[
          {
            name: 'bg-raditz',
            description: 'raditz',
          },
          {
            name: 'bg-raditz-60',
            description: 'raditz-60',
          },
          {
            name: 'bg-raditz-10',
            description: 'raditz-10',
          },
        ]}
      />
      <ColoursPalette
        title="Whis"
        colors={[
          {
            name: 'bg-whis',
            description: 'whis',
          },
          {
            name: 'bg-whis-60',
            description: 'whis-60',
          },
          {
            name: 'bg-whis-10',
            description: 'whis-10',
          },
        ]}
      />
      <ColoursPalette
        title="Frieza"
        colors={[
          {
            name: 'bg-frieza',
            description: 'frieza',
          },
          {
            name: 'bg-frieza-60',
            description: 'frieza-60',
          },
          {
            name: 'bg-frieza-10',
            description: 'frieza-10',
          },
        ]}
      />
      <ColoursPalette
        title="Nappa"
        colors={[
          {
            name: 'bg-nappa',
            description: 'nappa',
          },
          {
            name: 'bg-nappa-60',
            description: 'nappa-60',
          },
          {
            name: 'bg-nappa-10',
            description: 'nappa-10',
          },
        ]}
      />
    </PageSection>
  </>
);

export default PageColours;
