import React, {ReactNode} from 'react';
import {Heading, Text} from "@heathmont/moon-core";
import {ColorNames} from "@heathmont/moon-themes";
import {themed} from "@heathmont/moon-utils";
import Image from "next/image";
import ManifestLayout from "../components/ManifestLayout";
import Logo from '../components/sidebar/Logo';
import SameDifferentSignature from "../components/sidebar/SameDifferentSignature";
import imageMoon from '../public/moon.png';

const ManifestCard = ({ title, contentItems, classes, fontColor = 'popo.100', backgroundColor = 'white' }: {
  title: string,
  contentItems: string[],
  backgroundColor?: string,
  fontColor?: ColorNames,
  classes?: string[]
}) => (
  <div
    className={`px-8 py-5 rounded-2xl ${classes ? classes.map(className => className) : ''}`}
    style={{ backgroundColor: backgroundColor }}
  >
    <Heading as="h3" size={24} color={fontColor}>{title}</Heading>
    {
      !!contentItems.length && (<ul
        className='list-disc ml-6 mt-4'
        style={{ color: fontColor === 'popo.100' ? '#000' : '#fff' }}
      >
        {
          contentItems.map((item: string) => (<li>
            <Text color={fontColor} size={16}>
              {item}
            </Text>
          </li>))
        }
      </ul>)
    }
  </div>
);

const Manifest = () => (
  <div className='flex flex-col grow'>
    <div className="flex flex-row relative lg:mt-10 xl:mt-12 z-10">
      <div className="absolute left-0 top-0">
        <Logo color='white'/>
      </div>
      <div>
        <SameDifferentSignature />
      </div>
    </div>

    <div className="fixed top-0 right-0 w-[650px] 2xl:w-[892px] translate-x-1/3 -translate-y-1/3">
      <Image src={imageMoon} alt="Moon" />
    </div>

    <div className='grow flex flex-row lg:mb-10 xl:mb-12'>
      <div className='self-end hidden md:block'>
        <Heading as="h1" size={72} color='goten.100'>
          Why?
        </Heading>
      </div>

      <div className='mx-8 grid 2xl:grid-cols-3 xl:grid-cols-2 gap-6 max-w-5xl mt-12 z-10 relative'>
        <div className='flex flex-col justify-start'>
          <ManifestCard
            title='Consistent among different brands'
            contentItems={[
              'Same interaction and UI among different modules and sections (e.g. Cashier, Sidebar, Reg, Inputs etc)',
              'Theming'
            ]}
            backgroundColor='#4E46B4'
            fontColor='goten.100'
            classes={['mb-6']}
          />

          <ManifestCard
            title='Validating ideas/hypothesis for stakeholders'
            contentItems={[
              'You can build your own UI app (Rapid Proto) faster and not from scratch',
              'Benefit for hackathons',
              'Quality'
            ]}
            backgroundColor='#fff'
          />
        </div>

        <div className='flex flex-col justify-start'>
          <ManifestCard
            title='Reducing development costs'
            contentItems={[
              'Devs from different teams don’t need to implement the elements provided by CDS',
              'There will be less time spent on discussions/alignment between devs and design',
              'Designers don’t need to create new elements for every project/task',
              'Well document components library',
              'Avoiding mistakes and bugs'
            ]}
            backgroundColor='#fff'
            classes={['mb-6']}
          />

          <ManifestCard
            title='Performance'
            contentItems={[
              'Best practices across different brands',
              'Lightweight (Less JS = more performance)',
            ]}
            backgroundColor='#fff'
          />
        </div>

        <div className='flex flex-col justify-start'>
          <ManifestCard
            title='Faster UI development'
            contentItems={[
              'One place for all UI components (Source of truth)',
              'Consistent icons',
              'Non-frontend developers could build nice UI with using CDS'
            ]}
            backgroundColor='#fff'
          />
        </div>
      </div>
    </div>
  </div>
);

Manifest.getLayout = function getLayout(page: ReactNode) {
  return <ManifestLayout>{page}</ManifestLayout>;
};

export default Manifest;
