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

    const Svg = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    export const ${prefix(componentName)} = styled(Svg)(
      ({ backgroundColor }: { backgroundColor?: string }) => [
        {
          verticalAlign: 'middle',
        },
        backgroundColor && {
          backgroundColor,
          padding: backgroundColor ? '0.25em' : 0,
          overflow: 'visible',
          borderRadius: '50%',
        },
      ]
    );
  `;
}
module.exports = template;
