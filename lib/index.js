/**
 * @fileoverview 命名规范插件
 * @author Adashuai5
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: {
    'jsx-events-naming': require('./rules/jsx-events-naming'),
  },
  configs: {
    recommended: {
      plugins: ['ada'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'ada/jsx-events-naming': 2,
      },
    },
  },
}
