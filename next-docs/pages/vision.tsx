import { ReactNode } from 'react';
import VisionLayout from '../components/VisionLayout';
import Image from 'next/image';
import testimonial_1 from '../public/testimonial_1.png';
import vision_front_card_header_text_1 from '../public/vision_front_card_header_text_1.png';
import testimonial_2 from '../public/testimonial_2.png';
import vision_front_card_header_text_2 from '../public/vision_front_card_header_text_2.png';
import testimonial_3 from '../public/testimonial_3.png';
import vision_front_card_header_text_3 from '../public/vision_front_card_header_text_3.png';

// #141414

const Header = () => (
  <>
    <h1 className="text-6xl text-white tracking-tight font-semibold max-w-sm">
      Build the best products faster.
    </h1>
  </>
);

const Mission = () => (
  <div className="text-white mt-10 mb-10">
    <h6 className="text-xs tracking-[0.50em] mb-2">M I S S I O N</h6>
    <p className="text-lg">
      Create a tool that will reduce the time spent on routine and provide an
      opportunity for inspiration and innovation
    </p>
  </div>
);

interface CardFrontProps {
  headerImage: string | StaticImageData;
  altHeaderImage: string;
  subtext: string;
  innerCardText: string;
  name: string;
  company: string;
  userImage: string | StaticImageData;
}

const CardFront: React.FC<CardFrontProps> = ({
  headerImage,
  altHeaderImage,
  subtext,
  innerCardText,
  name,
  company,
  userImage,
}) => {
  return (
    <div className="vision-card-front text-white min-h-[10rem] rounded-2xl mb-10 2xl:mb-36">
      <div className="mx-93 mt-75 mx-auto flex flex-col w-fit pt-4">
        <Image className="rounded-lg" src={headerImage} alt={altHeaderImage} />
      </div>
      <p className="ml-auto mr-4 mt-9 text-right w-10/12 text-base">
        {subtext}
      </p>
      <div className="rounded-2xl vision-card-front-inner-card mt-8 mb-2 mx-2 py-9 px-8">
        <p className="text-[2rem] leading-10">{innerCardText}</p>
        <div className="flex mt-9 gap-x-4 items-center">
          <Image className="rounded-lg" src={userImage} alt="Testimonial" />
          <div className="flex flex-col">
            <p>{name}</p>
            <p>{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PageVision() {
  return (
    <div className="flex flex-col">
      <Header />
      <Mission />
      <div className="flex flex-col">
        <CardFront
          headerImage={vision_front_card_header_text_1}
          altHeaderImage="Efficiency, not consistency"
          subtext="Consistency is a result of efficiency, not the other way around. When the system is intuitive and empowering to use, consistency becomes an automatic by-product of adoption. "
          innerCardText="A design system isn’t a project. It’s a product serving products."
          name="Nathan Curtis"
          company="EightShapes"
          userImage={testimonial_1}
        />
        <CardFront
          headerImage={vision_front_card_header_text_2}
          altHeaderImage="Efficiency, not consistency"
          subtext="Consistency is a result of efficiency, not the other way around. When the system is intuitive and empowering to use, consistency becomes an automatic by-product of adoption. "
          innerCardText="A design system isn’t a project. It’s a product serving products."
          name="Nathan Curtis"
          company="EightShapes"
          userImage={testimonial_2}
        />
        <CardFront
          headerImage={vision_front_card_header_text_3}
          altHeaderImage="Efficiency, not consistency"
          subtext="Consistency is a result of efficiency, not the other way around. When the system is intuitive and empowering to use, consistency becomes an automatic by-product of adoption. "
          innerCardText="A design system isn’t a project. It’s a product serving products."
          name="Nathan Curtis"
          company="EightShapes"
          userImage={testimonial_3}
        />
      </div>
    </div>
  );
}

PageVision.getLayout = function getLayout(page: ReactNode) {
  return <VisionLayout>{page}</VisionLayout>;
};
