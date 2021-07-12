import React from 'react';
import CardArticle from './CardArticle';
import FacingReel from './FacingReel';

const News = () => (
  <FacingReel>
    <CardArticle
      title="How moon organises work in
      figma to improve collaboration"
      section=".tools"
    />

    <div className="mt-8">
      <CardArticle
        variant="vertical"
        title="How moon organises work in
      figma to improve collaboration"
        section=".tools"
      />
    </div>

    <CardArticle
      title="How moon organises work in
      figma to improve collaboration"
      section=".tools"
    />

    <div className="mt-8">
      <CardArticle
        variant="vertical"
        title="How moon organises work in
      figma to improve collaboration"
        section=".tools"
      />
    </div>
    <CardArticle
      title="How moon organises work in
      figma to improve collaboration"
      section=".tools"
    />

    <div className="mt-8">
      <CardArticle
        variant="vertical"
        title="How moon organises work in
      figma to improve collaboration"
        section=".tools"
      />
    </div>
  </FacingReel>
);

export default News;
