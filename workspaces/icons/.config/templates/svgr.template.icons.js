/* Disable rules due to SVGR's setup */
/* eslint-disable no-shadow, @typescript-eslint/no-unused-vars */
const prefix = (componentName) => componentName.name.replace('Svg', '');

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import React from 'react';

    const ${prefix(
      componentName
    )} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    export default ${prefix(componentName)};
  `;
}
module.exports = template;
