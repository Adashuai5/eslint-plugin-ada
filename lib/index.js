/**
 * @fileoverview 命名规范插件
 * @author Adashuai5
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
const output = {
  rules: {
    'jsx-events-naming': require('./rules/jsx-events-naming'),
  },
  configs: {
    // 导出自定义规则 在项目中直接引用
    recommended: {
      plugins: ['ada'], // 引入插件
      rules: {
        // 开启规则
        'ada/jsx-events-naming': 2,
      },
    },
  },
}
module.exports = output
