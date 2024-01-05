"use strict";
(() => {
var exports = {};
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 2933:
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
            await getSingleProduct(req, res);
            break;
        case "DELETE":
            await deleteProduct(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const getSingleProduct = async (req, res)=>{
    try {
        const product = await _models__WEBPACK_IMPORTED_MODULE_1__.products.findByPk(req.query.id);
        return res.status(200).json(product);
    } catch (error) {
        res.status(500).send("Error in deleting product, please try again!");
    }
};
const deleteProduct = async (req, res)=>{
    const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(req.headers.authorization, "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd");
    try {
        await _models__WEBPACK_IMPORTED_MODULE_1__.products.destroy({
            where: {
                id: req.query.id
            }
        });
        const products = await _models__WEBPACK_IMPORTED_MODULE_1__.products.findAll({
            where: {
                userId: userId
            },
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ]
        });
        return res.status(200).send(products);
    } catch (error) {
        res.status(500).send("Error in deleting product, please try again!");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(2933)));
module.exports = __webpack_exports__;

})();