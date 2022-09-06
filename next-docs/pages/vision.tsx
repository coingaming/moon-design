import { ReactNode } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import VisionCard from '../components/VisionCard';
import imageMoon from '../public/moon.png';
import testimonial_1 from '../public/testimonial_1.png';
import testimonial_2 from '../public/testimonial_2.png';
import testimonial_3 from '../public/testimonial_3.png';
import vision_front_card_header_text_1 from '../public/vision_front_card_header_text_1.png';
import vision_front_card_header_text_2 from '../public/vision_front_card_header_text_2.png';
import vision_front_card_header_text_3 from '../public/vision_front_card_header_text_3.png';

const PageVision = () => (
  <>
    <h1 className="relative z-10 text-moon-72 font-medium max-w-2xl text-bulma">
      Build the best products faster
    </h1>
    <div className="relative z-10 flex flex-col gap-6 max-w-2xl">
      <h6 className="text-moon-16 uppercase text-trunks">M I S S I O N</h6>
      <p className="text-moon-18 text-bulma">
        Create a tool that will reduce the time spent on routine and provide an
        opportunity for inspiration and innovation
      </p>
    </div>
    <div className="relative z-10 flex flex-col gap-16 text-bulma">
      <VisionCard
        headerImage={vision_front_card_header_text_1}
        altHeaderImage="Efficiency, not consistency"
        subtext="Consistency is a result of efficiency, not the other way around. When the system is intuitive and empowering to use, consistency becomes an automatic by-product of adoption. "
        innerCardText="A design system isn't a project. It's a product serving products."
        name="Nathan Curtis"
        company="EightShapes"
        userImage={testimonial_1}
        heading="Efficiency"
        subHeading="A Design System ensures maximum returns on time spent on code and design, with minimal wasted energy, in order to achieve the same results."
        supportingTextItems={[
          'It improves the approach, minimising time spent creating products from scratch so it can be better spent solving problems.',
          'It improves code through iteration, which is cheaper than writing quality code from scratch on demand.',
          'It eliminates the need to repeatedly communicate design decisions that are documented and implemented.',
          'It frees teams up from maintaining their own code, which is often duplicated.',
        ]}
      />
      <VisionCard
        headerImage={vision_front_card_header_text_2}
        altHeaderImage="Dynamic capability + stability = agility"
        subtext="Agility needs two things. One is a dynamic capability, the ability to move fast—speed, nimbleness, responsiveness. And agility requires stability, a stable foundation—a platform, if you will—of things that don't change."
        innerCardText="The more decisions you put off, and the longer you delay them, the more expensive they become."
        name="Craig Villamor"
        company="Google Maps"
        userImage={testimonial_2}
        heading="Agility"
        subHeading="A Design System facilitates a product's agility by preventing stagnation on topics already discussed, agreed upon, documented and implemented."
        supportingTextItems={[
          'It shares the design and coding workload evenly between all team members.',
          "It allows us to create prototypes, experiments and launch MVPs in less time. This makes sure elements like consistency and accessibility aren't ignored in the initial product in order to meet launch times.",
        ]}
      />
      <VisionCard
        headerImage={vision_front_card_header_text_3}
        altHeaderImage="Quality over quantity"
        subtext="Focus on the best solutions, quantity become as consolidation of Agility and Efficiency"
        innerCardText="Styles come and go. Good design is a language, not a style."
        name="Massimo Vignelli"
        company="Italian Designer"
        userImage={testimonial_3}
        heading="Quality"
        subHeading="A Design System provides a systematic approach to managing code quality and design decisions."
        supportingTextItems={[
          'Being in constant evolution through iterations means the quality of each component continues to improve over time, particularly in comparison to new components.',
          'The fact it is a modular, closed and versioned system reduces the risk of losses to both code and design.',
          "It's easily isolated in order to assess its quality and measure its external integration.",
        ]}
      />
    </div>
    <div className="fixed top-0 ltr:right-0 rtl:left-0 w-[650px] 2xl:w-[892px] ltr:translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3">
      <Image src={imageMoon} alt="Moon" />
    </div>
  </>
);

export default PageVision;

PageVision.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
