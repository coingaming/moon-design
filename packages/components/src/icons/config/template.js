const prefix = componentName => componentName.name.replace('Svg', '');

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import * as React from 'react';
    import styled from '@emotion/styled';
    import { iconStyles } from '../config/styles';

    const Svg = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    export const ${prefix(componentName)} = styled(Svg)(iconStyles);
  `;
}
module.exports = template;
