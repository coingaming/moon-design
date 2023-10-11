const ComponentPreview = ({ component }: { component: JSX.Element }) => (
  <div
    className={
      'flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-gohan rounded-moon-s-sm'
    }
  >
    {component}
  </div>
);

export default ComponentPreview;
