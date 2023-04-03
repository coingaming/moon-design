import styledComponents from './styledComponents';

const getComponent = (name: string) => {
  const component = styledComponents.find(
    (component) => component.name === name
  );
  return {
    name: component?.name,
    href: component?.href,
  };
};

export default getComponent;
