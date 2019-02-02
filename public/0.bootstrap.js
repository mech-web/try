(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasmtest.js":
/*!**************************!*\
  !*** ../pkg/wasmtest.js ***!
  \**************************/
/*! exports provided: compile, __widl_f_log_1_, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compile\", function() { return compile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_1_\", function() { return __widl_f_log_1_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasmtest_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasmtest_bg */ \"../pkg/wasmtest_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasmtest_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasmtest_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _wasmtest_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n/**\n* @param {string} arg0\n* @returns {void}\n*/\nfunction compile(arg0) {\n    const ptr0 = passStringToWasm(arg0);\n    const len0 = WASM_VECTOR_LEN;\n    return _wasmtest_bg__WEBPACK_IMPORTED_MODULE_0__[\"compile\"](ptr0, len0);\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __widl_f_log_1_(arg0) {\n    console.log(getObject(arg0));\n}\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///../pkg/wasmtest.js?");

/***/ }),

/***/ "../pkg/wasmtest_bg.wasm":
/*!*******************************!*\
  !*** ../pkg/wasmtest_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, compile, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasmtest */ \"../pkg/wasmtest.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasmtest_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasmtest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasmtest */ \"../pkg/wasmtest.js\");\n\r\n\r\nlet code = document.createElement(\"textarea\");\r\ncode.setAttribute(\"class\", \"code\");\r\ncode.setAttribute(\"id\", \"code\");\r\ncode.innerHTML =  \"# Program\";\r\n\r\nlet compile = document.createElement(\"button\");\r\ncompile.setAttribute(\"id\", \"compile\");\r\ncompile.innerHTML =  \"Compile\";\r\n\r\nlet container = document.createElement(\"div\");\r\ncontainer.setAttribute(\"class\",\"container\");\r\n\r\ncontainer.appendChild(code);\r\ncontainer.appendChild(compile);\r\n\r\ndocument.body.appendChild(container);\r\n\r\n\r\n\r\ndocument.getElementById(\"compile\").addEventListener(\"click\", function() {\r\n  let code = document.getElementById(\"code\");\r\n  wasmtest__WEBPACK_IMPORTED_MODULE_0__[\"compile\"](code.value);\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);