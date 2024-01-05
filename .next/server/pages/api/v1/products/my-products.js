"use strict";
(() => {
var exports = {};
exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 8129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "GET":
            await getProducts(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const getProducts = async (req, res)=>{
    const { page , limit  } = req.query;
    const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(req.headers.authorization, "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd");
    try {
        //pagination
        const pageNumber = parseInt(page);
        const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber;
        const postsOffset = limit * (getRealNumber - 1);
        const totalProducts = await _models__WEBPACK_IMPORTED_MODULE_1__.products.count({});
        const products = await _models__WEBPACK_IMPORTED_MODULE_1__.products.findAll({
            where: {
                userId: userId
            },
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ],
            offset: postsOffset,
            limit
        });
        const totalPages = Math.ceil(totalProducts / limit);
        return res.status(200).json({
            products,
            totalPages
        });
    } catch (error) {
        res.status(500).send("Error in finding Products, please try again!");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(8129)));
module.exports = __webpack_exports__;

})();