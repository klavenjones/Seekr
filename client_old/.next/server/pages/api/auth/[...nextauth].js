module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_docclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/docclient */ \"./util/docclient.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  // Configure one or more authentication providers\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Auth0({\n    clientId: \"CoN75sJk5RG1czfpHObPeYUO2oaAhQvR\",\n    clientSecret: \"VY8TwCmYK8Cr46Fv3u4kUM2qcuQZb3Eyxt-iwi2w9kLbsyYzbhBAcY2cOF059rAx\",\n    domain: \"pixaqode.us.auth0.com\"\n  })],\n  // secret: process.env.SECRET,\n  session: {\n    jwt: true,\n    maxAge: 1 * 60 * 60\n  },\n  jwt: {\n    secret: process.env.SECRET\n  },\n  callbacks: {\n    async session(session, user) {\n      session.user.userId = user.sub;\n      return session;\n    },\n\n    async jwt(token, user, account, profile, isNewUser) {\n      if (user !== null && user !== void 0 && user.id) {\n        token.userId = user.id;\n      }\n\n      return token;\n    },\n\n    async signIn(user, account, profile) {\n      try {\n        let params = {\n          TableName: \"USERS-seekr-job-application-tracker-dev\",\n          Key: {\n            userId: user.id\n          }\n        };\n        const currentUser = await _util_docclient__WEBPACK_IMPORTED_MODULE_2__[\"docClient\"].get(params).promise();\n\n        if (Object.keys(currentUser).length <= 0) {\n          let newUser = {\n            TableName: \"USERS-seekr-job-application-tracker-dev\",\n            Item: {\n              userId: user.id,\n              name: profile.name,\n              email: user.email,\n              image: user.image\n            }\n          };\n          await _util_docclient__WEBPACK_IMPORTED_MODULE_2__[\"docClient\"].put(newUser).promise();\n        }\n      } catch (error) {\n        console.log(error.message);\n      }\n\n      return true;\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJBdXRoMCIsImNsaWVudElkIiwicHJvY2VzcyIsImNsaWVudFNlY3JldCIsImRvbWFpbiIsIk5FWFRfUFVCTElDX0FVVEgwX0RPTUFJTiIsInNlc3Npb24iLCJqd3QiLCJtYXhBZ2UiLCJzZWNyZXQiLCJlbnYiLCJTRUNSRVQiLCJjYWxsYmFja3MiLCJ1c2VyIiwidXNlcklkIiwic3ViIiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImlzTmV3VXNlciIsImlkIiwic2lnbkluIiwicGFyYW1zIiwiVGFibGVOYW1lIiwiS2V5IiwiY3VycmVudFVzZXIiLCJkb2NDbGllbnQiLCJnZXQiLCJwcm9taXNlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm5ld1VzZXIiLCJJdGVtIiwibmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJwdXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZUEsK0dBQVEsQ0FBQztBQUN0QjtBQUNBQyxXQUFTLEVBQUUsQ0FDVEMsMERBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNkQyxZQUFRLEVBQUVDLGtDQURJO0FBRWRDLGdCQUFZLEVBQUVELGtFQUZBO0FBR2RFLFVBQU0sRUFBRUYsdUJBQW9DRztBQUg5QixHQUFoQixDQURTLENBRlc7QUFTdEI7QUFDQUMsU0FBTyxFQUFFO0FBQ1BDLE9BQUcsRUFBRSxJQURFO0FBRVBDLFVBQU0sRUFBRSxJQUFJLEVBQUosR0FBUztBQUZWLEdBVmE7QUFjdEJELEtBQUcsRUFBRTtBQUNIRSxVQUFNLEVBQUVQLE9BQU8sQ0FBQ1EsR0FBUixDQUFZQztBQURqQixHQWRpQjtBQWlCdEJDLFdBQVMsRUFBRTtBQUNULFVBQU1OLE9BQU4sQ0FBY0EsT0FBZCxFQUF1Qk8sSUFBdkIsRUFBNkI7QUFDM0JQLGFBQU8sQ0FBQ08sSUFBUixDQUFhQyxNQUFiLEdBQXNCRCxJQUFJLENBQUNFLEdBQTNCO0FBQ0EsYUFBT1QsT0FBUDtBQUNELEtBSlE7O0FBS1QsVUFBTUMsR0FBTixDQUFVUyxLQUFWLEVBQWlCSCxJQUFqQixFQUF1QkksT0FBdkIsRUFBZ0NDLE9BQWhDLEVBQXlDQyxTQUF6QyxFQUFvRDtBQUNsRCxVQUFJTixJQUFKLGFBQUlBLElBQUosZUFBSUEsSUFBSSxDQUFFTyxFQUFWLEVBQWM7QUFDWkosYUFBSyxDQUFDRixNQUFOLEdBQWVELElBQUksQ0FBQ08sRUFBcEI7QUFDRDs7QUFDRCxhQUFPSixLQUFQO0FBQ0QsS0FWUTs7QUFXVCxVQUFNSyxNQUFOLENBQWFSLElBQWIsRUFBbUJJLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFxQztBQUNuQyxVQUFJO0FBQ0YsWUFBSUksTUFBTSxHQUFHO0FBQ1hDLG1CQUFTLEVBQUVyQix5Q0FEQTtBQUVYc0IsYUFBRyxFQUFFO0FBQUVWLGtCQUFNLEVBQUVELElBQUksQ0FBQ087QUFBZjtBQUZNLFNBQWI7QUFJQSxjQUFNSyxXQUFXLEdBQUcsTUFBTUMseURBQVMsQ0FBQ0MsR0FBVixDQUFjTCxNQUFkLEVBQXNCTSxPQUF0QixFQUExQjs7QUFFQSxZQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsV0FBWixFQUF5Qk0sTUFBekIsSUFBbUMsQ0FBdkMsRUFBMEM7QUFDeEMsY0FBSUMsT0FBTyxHQUFHO0FBQ1pULHFCQUFTLEVBQUVyQix5Q0FEQztBQUVaK0IsZ0JBQUksRUFBRTtBQUNKbkIsb0JBQU0sRUFBRUQsSUFBSSxDQUFDTyxFQURUO0FBRUpjLGtCQUFJLEVBQUVoQixPQUFPLENBQUNnQixJQUZWO0FBR0pDLG1CQUFLLEVBQUV0QixJQUFJLENBQUNzQixLQUhSO0FBSUpDLG1CQUFLLEVBQUV2QixJQUFJLENBQUN1QjtBQUpSO0FBRk0sV0FBZDtBQVVBLGdCQUFNVix5REFBUyxDQUFDVyxHQUFWLENBQWNMLE9BQWQsRUFBdUJKLE9BQXZCLEVBQU47QUFDRDtBQUNGLE9BcEJELENBb0JFLE9BQU9VLEtBQVAsRUFBYztBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxPQUFsQjtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNEOztBQXJDUTtBQWpCVyxDQUFELENBQXZCIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXG5pbXBvcnQgeyBkb2NDbGllbnQgfSBmcm9tICcuLi8uLi8uLi91dGlsL2RvY2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5BdXRoMCh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVVUSDBfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9DTElFTlRfU0VDUkVULFxuICAgICAgZG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIMF9ET01BSU4sXG4gICAgfSksXG4gIF0sXG4gIC8vIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICAgIG1heEFnZTogMSAqIDYwICogNjAsXG4gIH0sXG4gIGp3dDoge1xuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24sIHVzZXIpIHtcbiAgICAgIHNlc3Npb24udXNlci51c2VySWQgPSB1c2VyLnN1YlxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9LFxuICAgIGFzeW5jIGp3dCh0b2tlbiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyKSB7XG4gICAgICBpZiAodXNlcj8uaWQpIHtcbiAgICAgICAgdG9rZW4udXNlcklkID0gdXNlci5pZFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RZTkFNT0RCX1RBQkxFLFxuICAgICAgICAgIEtleTogeyB1c2VySWQ6IHVzZXIuaWQgfSxcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGRvY0NsaWVudC5nZXQocGFyYW1zKS5wcm9taXNlKClcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudFVzZXIpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgbGV0IG5ld1VzZXIgPSB7XG4gICAgICAgICAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RZTkFNT0RCX1RBQkxFLFxuICAgICAgICAgICAgSXRlbToge1xuICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSxcbiAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgIGltYWdlOiB1c2VyLmltYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhd2FpdCBkb2NDbGllbnQucHV0KG5ld1VzZXIpLnByb21pc2UoKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gIH0sXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "./util/docclient.js":
/*!***************************!*\
  !*** ./util/docclient.js ***!
  \***************************/
/*! exports provided: docClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"docClient\", function() { return docClient; });\nconst AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\nconst docClient = new AWS.DynamoDB.DocumentClient({\n  region: \"us-east-2\",\n  accessKeyId: \"AKIASZBIYJ7BFE4AKEB7\",\n  secretAccessKey: \"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\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL2RvY2NsaWVudC5qcz84MTI3Il0sIm5hbWVzIjpbIkFXUyIsInJlcXVpcmUiLCJkb2NDbGllbnQiLCJEeW5hbW9EQiIsIkRvY3VtZW50Q2xpZW50IiwicmVnaW9uIiwicHJvY2VzcyIsImFjY2Vzc0tleUlkIiwic2VjcmV0QWNjZXNzS2V5IiwiTkVYVF9QVUJMSUNfQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQW5COztBQUVPLE1BQU1DLFNBQVMsR0FBRyxJQUFJRixHQUFHLENBQUNHLFFBQUosQ0FBYUMsY0FBakIsQ0FBZ0M7QUFDdkRDLFFBQU0sRUFBRUMsV0FEK0M7QUFFdkRDLGFBQVcsRUFBRUQsc0JBRjBDO0FBR3ZERSxpQkFBZSxFQUFFRiwwQ0FBNkNHO0FBSFAsQ0FBaEMsQ0FBbEIiLCJmaWxlIjoiLi91dGlsL2RvY2NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFXUyA9IHJlcXVpcmUoJ2F3cy1zZGsnKVxuXG5leHBvcnQgY29uc3QgZG9jQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCh7XG4gIHJlZ2lvbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVdTX1JFR0lPTixcbiAgYWNjZXNzS2V5SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FXU19BQ0NFU1NfS0VZX0lELFxuICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FXU19TRUNSRVRfQUNDRVNTX0tFWSxcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/docclient.js\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhd3Mtc2RrXCI/NTE0MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhd3Mtc2RrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdzLXNka1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///aws-sdk\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });