import components from './components';

export type ComponentNames = typeof components[number]['name'];

const getComponent = (name: ComponentNames) => {
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
