import components from './components';

export type ComponentNames = (typeof components)[number]['name'] | 'Typography';

export const camelCaseName = (name: ComponentNames) =>
  name.replace(/^[a-zA-Z]/, (l) => l.toLowerCase());

type GetComponentProps = {
  name?: ComponentNames;
  camelCaseName: string;
  text?: string;
  href: string;
  image: string;
};

const getComponent = (name: ComponentNames): GetComponentProps => {
  const component = components.find((component) => component.name === name);
  const image = `/components/${name?.toLowerCase()}.png`;
  const href = `/components/${camelCaseName(name)}`;
  return {
    name: component?.name,
    camelCaseName: camelCaseName(name),
    text: component?.text,
    href,
    image,
  };
};

export default getComponent;
