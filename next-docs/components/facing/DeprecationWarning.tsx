import Link from 'next/link';

type Props = {
  href: string;
  name: string;
};

const DeprecationWarning: React.FC<Props> = ({ href, name }) => (
  <p>
    <p className="text-chichi font-medium">NB! The component is deprecated.</p>
    Please use a new{' '}
    <Link
      href={href}
      className="transition-colors underline hover:text-piccolo"
    >
      {name}
    </Link>{' '}
    built with Tailwind.
  </p>
);

export default DeprecationWarning;
