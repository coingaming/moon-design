const ComponentPreview = ({ component }: { component: JSX.Element }) => (
  <div
    className={
      'flex flex-wrap items-center justify-around p-8 gap-2 w-full rounded-moon-s-sm border border-beerus bg-goku'
    }
  >
    {component}
  </div>
);

export default ComponentPreview;
