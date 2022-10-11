import Link from 'next/link';

type Props = {
  href: string;
  name: string;
};

const DeprecationWarning: React.FC<Props> = ({ href, name }) => (
  <p className="font-medium">
    NB! The component is deprecated. Please use our{' '}
    <Link href={href}>
      <a className="text-piccolo transition-colors duration-200 hover:text-hit visited:text-hit">
        new {name}
      </a>
    </Link>{' '}
    built with Tailwind.
  </p>
);

export default DeprecationWarning;
