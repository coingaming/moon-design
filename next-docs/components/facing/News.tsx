import React from 'react';
import CardArticle from './CardArticle';
import FacingReel from './FacingReel';

const News = () => (
  <FacingReel>
    <CardArticle
      href="/getting-started"
      title="Learn how to get Moon Design System up and running in your project."
      section=".tools"
    />

    <div className="mt-8">
      <CardArticle
        href="/colours"
        variant="vertical"
        title="Customizing color palette for your project."
        section=".tools"
      />
    </div>
  </FacingReel>
);

export default News;
