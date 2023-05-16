const prefix = (componentName) => componentName.replace('Svg', '');

const template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`
    import React from 'react';

    const ${prefix(
      componentName
    )} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    export default ${prefix(componentName)};
  `;
};
module.exports = template;
