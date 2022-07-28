import { Button } from '@heathmont/moon-core-tw';
import Link from 'next/link';

const PageTitle = () => (
  <div className="relative z-50 flex flex-col items-start gap-6">
    <h1 className="text-moon-64 font-medium">Moon design system.</h1>
    <p className="text-moon-24 max-w-screen-sm">
      Moon is Yolo Group product design system that helps us maintain the
      integrity of their user experience and optimize design and development
      resources.
    </p>
    <p className="flex items-center gap-2 text-moon-16 max-w-screen-sm font-medium">
      <span>Try out Moon DS for </span>
      <Link href="https://surface.moon.io/">
        <a target="_blank" rel="noreferrer">
          <Button size="sm">Elixir</Button>
        </a>
      </Link>
    </p>
  </div>
);

export default PageTitle;
