import colourRules from '../../public/illustartions/colourRules.webp';
import productColours from '../../public/illustartions/productColours.webp';
import tokens from '../../public/illustartions/tokens.webp';
import typography from '../../public/illustartions/typography.webp';
import usage from '../../public/illustartions/usage.webp';
import PageSection from '../PageSection';

const DesGettingStarted = () => (
  <>
    <video controls controlsList="nodownload" preload="">
      <source src="https://s3.amazonaws.com/cdn.coingaming.io/videos/gettingStartedDesigners.mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <PageSection title="Components usage" image={usage}>
      <p className="text-trunks">
        Use search to find components, each component in the library has its own
        unique name, which corresponds to the name in the code.
      </p>
      <p>
        Drag the component you are using to your work area (product templates).
        Please note that there may be hidden layers inside the component to add
        various elements. Components can be in different states depending on
        your layout.
      </p>
      <p>
        <span className="font-medium">Use the Figma - Variants</span> menu to
        switch states.
      </p>
    </PageSection>
    <PageSection title="Colour convention and rules" image={colourRules}>
      <p className="text-trunks">What makes our color system different?</p>
      <p>For that, we made a decision to give our colours unique names.</p>
      <p>
        Meet the <span className="font-medium">Dragon Ball Z approach</span>.
      </p>
      <p>
        Each color name is assigned for specific purpose and for each product
        these values are different.
      </p>
    </PageSection>
    <PageSection title="Product colours" image={productColours}>
      <p className="text-trunks">
        How to create your own custom colours based on the Moon colour
        convention.
      </p>
      <ul className="list-disc ps-8">
        <li>
          <span className="font-medium">Check</span> the guide for colours
        </li>
        <li>
          <span className="font-medium">Duplicate</span> Colours file
        </li>
        <li>
          <span className="font-medium">Replace</span> colour values one by one
        </li>
        <li>
          <span className="font-medium">Publish</span> Library
        </li>
        <li>
          <span className="font-medium">Enable</span> it from the "Asset panel"
        </li>
        <li>
          <span className="font-medium">🎉 Enjoy</span> your new theme.
        </li>
      </ul>
    </PageSection>
    <PageSection title="Typography" image={typography}>
      <p className="text-trunks">
        Grid of font sizes for web and mobile devices used in components.
      </p>
      <p>Styles contain:</p>
      <ul className="list-disc ps-8">
        <li>font size</li>
        <li>font weight</li>
        <li>line height</li>
        <li>letter spacing</li>
      </ul>
      <p>We also use 2 types of typo:</p>
      <ul className="list-disc ps-8">
        <li>
          <span className="font-medium">Paragraph</span> - for regular text
        </li>
        <li>
          <span className="font-medium">UI type</span> - for UI elements
          (buttons, inputs, which helps developers)
        </li>
      </ul>
    </PageSection>
    <PageSection title="Product tokens" image={tokens}>
      <p className="text-trunks">
        Design tokens are the collections of variables that customise Moon
        components for your product.
      </p>
      <ul className="list-disc ps-8">
        <li>
          <span className="font-medium">Find</span> tokens page in your copy of
          the components file
        </li>
        <li>
          <span className="font-medium">Change</span> the values to your product
          ones
        </li>
        <li>
          <span className="font-medium">Publish</span> Library
        </li>
        <li>
          <span className="font-medium">Share</span> tokens with your product
          front-end dev
        </li>
        <li>
          <span className="font-medium">🎉 Enjoy</span> your new theme.
        </li>
      </ul>
    </PageSection>
  </>
);

export default DesGettingStarted;
