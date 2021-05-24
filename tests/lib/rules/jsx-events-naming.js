/**
 * @fileoverview test
 * @author Adashaui5
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/jsx-events-naming'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true,
  },
}

const ruleTester = new RuleTester({ parserOptions })

ruleTester.run('jsx-events-naming', rule, {
  valid: [{ code: '<button onClick={handleClick}></button>' }],

  invalid: [
    {
      code: '<button onClick={onClick}></button>',
      errors: [
        {
          message:
            'The name of the event must be a hump starting with "handle"',
          type: 'JSXElement',
        },
      ],
    },
  ],
})
