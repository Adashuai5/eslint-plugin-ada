/**
 * @fileoverview jsx-events-naming
 * @author Adashaui5
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'naming-rule for jsx event attribute',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    return {
      JSXElement(node) {
        const attributes = node.openingElement.attributes
        attributes.forEach((JSXAttribute) => {
          if (JSXAttribute.name.name.match(/^on[A-Z]/)) {
            if (!JSXAttribute.value.expression.name.match(/^handle[A-Z]/)) {
              context.report({
                node,
                message:
                  'The name of the event must be a hump starting with "handle"',
              })
            }
          }
        })
      },
    }
  },
}
