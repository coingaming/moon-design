import React from 'react';
import Image from 'next/image';

import classNames from '../../utils/classNames';

interface Props {
  variant?: 'horizontal' | 'vertical';
  image: React.ReactNode;
  name: string;
}
const CardContributor: React.FC<Props> = ({ variant, name, image }) => (
  <div className="flex flex-col">
    {image}
    <p className="text-2xl mt-2 font-semibold tracking-tight">{name}</p>
  </div>
);

export default CardContributor;
