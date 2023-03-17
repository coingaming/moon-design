import components from './components';

const getComponent = (name: string) => {
  const component = components.find((component) => component.name === name);
  const image = `/components/${name.toLowerCase()}.png`;
  return {
    name: component?.name,
    href: component?.href,
    text: component?.text,
    image,
  };
};

export default getComponent;
