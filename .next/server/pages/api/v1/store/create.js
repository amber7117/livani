"use strict";
(() => {
var exports = {};
exports.id = 4726;
exports.ids = [4726];
exports.modules = {

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

/***/ 7846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7355);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "POST":
            await createStore(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const createStore = async (req, res)=>{
    if (!("authorization" in req.headers)) {
        return res.status(401).send("Not authenticated");
    }
    const { name , web , email , aboutText  } = req.body;
    try {
        const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(req.headers.authorization, "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd");
        // check email, name, aboutText format
        if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_2___default()(name, {
            min: 3,
            max: 15
        })) {
            return res.status(422).send("Name must be 3-15 characters long");
        } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default()(email)) {
            return res.status(422).send("Email must be valid");
        } else if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_2___default()(aboutText, {
            min: 15,
            max: 500
        })) {
            return res.status(422).send("About texts must be 15-500 characters long");
        }
        const store = await _models__WEBPACK_IMPORTED_MODULE_3__.stores.findOne({
            where: {
                userId: userId,
                email: email
            }
        });
        if (store) {
            return res.status(422).send(`Store already exist with that user or email`);
        }
        await _models__WEBPACK_IMPORTED_MODULE_3__.stores.create({
            userId,
            name,
            web,
            email,
            aboutText
        });
        res.status(200).send("Successfully created the store & it is now pending, after approval from admin you can create products.");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error in creating store, please try again!");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(7846)));
module.exports = __webpack_exports__;

})();