"use strict";
(() => {
var exports = {};
exports.id = 4276;
exports.ids = [4276];
exports.modules = {

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 5260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "GET":
            await getOrders(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const getOrders = async (req, res)=>{
    const { page , limit  } = req.query;
    try {
        //pagination
        const pageNumber = parseInt(page);
        const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber;
        const postsOffset = limit * (getRealNumber - 1);
        const totalOrders = await _models__WEBPACK_IMPORTED_MODULE_0__.orders.count({});
        const orders = await _models__WEBPACK_IMPORTED_MODULE_0__.orders.findAll({
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ],
            offset: postsOffset,
            limit,
            include: [
                {
                    model: _models__WEBPACK_IMPORTED_MODULE_0__.orderitems,
                    as: "ordersItem"
                }, 
            ]
        });
        const totalPages = Math.ceil(totalOrders / limit);
        return res.status(200).json({
            orders,
            totalPages
        });
    } catch (error) {
        res.status(500).send("Error");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(5260)));
module.exports = __webpack_exports__;

})();