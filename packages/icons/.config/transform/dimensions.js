/**
 * Transform Dimensions
 *
 * Set icon sizing to `em` for easy resizing via `font-size`.
 *
 * Examples:
 *
 * If the width is larger than the height, set the width to `1em` and the height
 * to `auto`.
 * Before: <svg foo="bar" width="320" height="200" />
 * After:  <svg foo="bar" width="1em" height="auto" />
 *
 * If the height is larger than the width, set the height to `1em` and the width
 * to `auto`.
 * Before: <svg foo="bar" width="30" height="60" />
 * After:  <svg foo="bar" width="auto" height="1em" />
 *
 * If the height is larger are the same size, set both to `1em`.
 * Before: <svg foo="bar" width="30" height="30" />
 * After:  <svg foo="bar" width="1em" height="1em" />
 *
 * References:
 * This function is heavily based on `@svgr/babel-plugin-svg-em-dimensions`:
 * https://github.com/smooth-code/svgr/tree/master/packages/babel-plugin-svg-em-dimensions
 */

module.exports = ({ types: t }) => ({
  visitor: {
    JSXOpeningElement: {
      enter(path) {
        if (
          !['svg', 'Svg'].some((element) =>
            path.get('name').isJSXIdentifier({ name: element })
          )
        )
          return;

        /* Attributes that we need to modify */
        const requiredAttrs = ['width', 'height'];

        /**
         * Check if a JSX attribute matches the required attributes above, and
         * return `true` if tests.
         */
        const isRequiredAttr = (attributePath) => {
          if (!attributePath.isJSXAttribute()) {
            return false;
          }

          return requiredAttrs.find(
            (attr) => attr === attributePath.node.name.name
          );
        };

        /**
         * Get the initial width and height values and create a temporary
         * object to store them.
         */
        const attrInitialValues = Object.assign(
          {},
          ...path.get('attributes').map(
            (attributePath) =>
              isRequiredAttr(attributePath) && {
                [attributePath.node.name.name]:
                  attributePath.get('value').node.expression.value,
              }
          )
        );

        /**
         * Modify the attribute values to `em` or `auto` based on the initial
         * sizes.
         */
        const attrValues = {
          width:
            attrInitialValues.width >= attrInitialValues.height
              ? '1em'
              : '100%',
          height:
            attrInitialValues.height >= attrInitialValues.width
              ? '1em'
              : '100%',
        };

        /**
         * Replace the initial values with the new values.
         */
        path.get('attributes').forEach((attributePath) => {
          if (!isRequiredAttr(attributePath)) return;
          const name = attributePath.node.name.name;
          const index = requiredAttrs.indexOf(name);
          attributePath
            .get('value')
            .replaceWith(t.stringLiteral(attrValues[name]));
          requiredAttrs.splice(index, 1);
        });
      },
    },
  },
});
