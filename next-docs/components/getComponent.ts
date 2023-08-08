import components from './components';

export type ComponentNames = typeof components[number]['name'] | 'Typography';

const getComponent = (name: ComponentNames) => {
  const component = components.find((component) => component.name === name);
  const image = `/components/${name?.toLowerCase()}.png`;
  const camelCaseName = name.replace(/^[a-zA-Z]/, (l) => l.toLowerCase());
  const href = `/components/${camelCaseName}`;
  return {
    name: component?.name,
    camelCaseName,
    text: component?.text as string,
    href,
    image,
  };
};

export default getComponent;
