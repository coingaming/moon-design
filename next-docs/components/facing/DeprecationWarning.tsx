import Link from 'next/link';

type Props = {
  href: string;
  name: string;
};

const DeprecationWarning: React.FC<Props> = ({ href, name }) => (
  <p>
    <p className="text-krillin font-medium">
      NB! The component will be deprecated soon.
    </p>
    Please check out a new{' '}
    <Link href={href}>
      <a className="transition-colors underline hover:text-piccolo">{name}</a>
    </Link>{' '}
    built with Tailwind.
  </p>
);

export default DeprecationWarning;
