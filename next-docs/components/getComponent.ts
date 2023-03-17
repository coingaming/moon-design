import components from './components';

const getComponent = (name: string) => {
  const component = components.find((component) => component.name === name);
  const image = `/components/${name.toLowerCase()}.png`;
  return {
    component,
    image,
  };
};

export default getComponent;
