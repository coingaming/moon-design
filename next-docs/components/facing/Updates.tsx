import React from 'react';
import CardArticle from './CardArticle';
import FacingReel from './FacingReel';
import SectionTitle from './SectionTitle';

const Updates = () => (
  <div className="flex flex-col gap-12">
    <SectionTitle
      title="Updates."
      description="Explore our community features."
    />
    <FacingReel>
      <CardArticle
        variant="wide"
        href="https://moonds.medium.com/introduction-to-the-world-of-dialogs-and-notifications-ad74d55fff0d"
        title="Introduction to the world of dialogs and notifications."
        section="blog"
        author="Natalja Saks"
      />
      <CardArticle
        variant="tall"
        href="https://moonds.medium.com/10-guidelines-to-efficiently-display-data-tables-76c8f71af3c3"
        title="10 Guidelines to efficiently display data tables."
        section="blog"
        author="Ksenia Pavlov"
      />
      <CardArticle
        href="https://moonds.medium.com/ux-aspect-of-design-system-d51bffd3734c"
        title="UX aspect of design system."
        section="blog"
        author="Dmytro Nikolaienko"
      />
      <CardArticle
        variant="wide"
        href="/gettingStarted"
        title="Learn how to get Moon Design System up and running in your project."
        section=".tools"
      />
      <CardArticle
        variant="tall"
        href="/colours"
        title="Customizing color palette for your project."
        section="tools"
      />
    </FacingReel>
  </div>
);

export default Updates;
