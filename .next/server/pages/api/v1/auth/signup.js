"use strict";
(() => {
var exports = {};
exports.id = 1657;
exports.ids = [1657];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 7379:
/***/ ((module) => {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ 7355:
/***/ ((module) => {

module.exports = require("validator/lib/isLength");

/***/ }),

/***/ 1916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7355);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    let { name , email , password  } = req.body;
    try {
        if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3___default()(name, {
            min: 3
        })) {
            return res.status(422).send("The name should be a minimum of Three characters long");
        } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_2___default()(email)) {
            return res.status(422).send("Email should be a valid email address");
        } else if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3___default()(password, {
            min: 6
        })) {
            return res.status(422).send("Password should be minimum of Six characters long");
        }
        // Encrypt password with bcrypt
        const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 10);
        const newUser = await _models__WEBPACK_IMPORTED_MODULE_4__.users.create({
            name,
            email,
            password: passwordHash
        });
        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
            userId: newUser.id
        }, "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd", {
            expiresIn: "7d"
        });
        res.status(201).json(token);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error in account signup. Please try again.");
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(1916)));
module.exports = __webpack_exports__;

})();