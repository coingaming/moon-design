import * as React from 'react';
import rem from 'polished/lib/helpers/rem';

type PaymentMethodImageProps = {
  src: string;
  alt: string;
  size?: 'small' | 'large';
  width?: string;
  height?: string;
};

/* USAGE:
<PaymentMethodImage
  size="large"
  src="/assets/img/payment-logos/Ecopayz.png"
  alt="Ecopayz"
/>
*/

export const PaymentMethodImage: React.FC<PaymentMethodImageProps> = ({
  size,
  width,
  height,
  src,
  alt,
}) => {
  const actualWidth =
    width || size === 'large' ? rem(96) : size === 'small' ? rem(42) : rem(42);
  const actualHeight =
    height || size === 'large' ? rem(70) : size === 'small' ? rem(30) : rem(30);
  return (
    <img
      style={{ width: actualWidth, height: actualHeight }}
      src={src}
      alt={alt}
    />
  );
};
