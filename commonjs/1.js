require("./2");
require("./3");

//类似require源码实现
// var cache = {};
//
// function getModuleId(params) {
//   //...
// }
//
// function myRequire(modulePath) {
//   var moduleId = getModuleId(modulePath);
//   if (cache[moduleId]) {
//     return cache[moduleId];
//   }
//
//   function _require(exports, require, module, __filename, __dirname) {
//     // 代码执行的时候可以直接打印这些变量，this，exports，module.exports指向同一个对象
//     // this = Module.exports
//     // exports = Module.exports
//     // require = myRequire函数
//     // module = Module
//     // __filename = moduleId
//     // __dirname = __dirname
//     // 文件代码执行地方
//     //...
//   }
//
//   var Module = {
//     exports: {},
//   };
//   var exports = Module.exports;
//   var __filename = moduleId;
//   var __dirname = getDirName(__filename);
//
//   _require.call(exports, exports, myRequire, Module, __filename, __dirname);
//   cache[moduleId] = Module.exports;
//   return Module.exports;
// }
