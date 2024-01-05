"use strict";
(() => {
var exports = {};
exports.id = 5947;
exports.ids = [5947];
exports.modules = {

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 2218:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_1__]);
sequelize__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "GET":
            await getAllStores(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const getAllStores = async (req, res)=>{
    const { page , limit  } = req.query;
    //pagination
    const pageNumber = parseInt(page);
    const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber;
    const postsOffset = limit * (getRealNumber - 1);
    const userRole = "super-admin";
    const adminRole = "admin";
    try {
        const totalUsers = await _models__WEBPACK_IMPORTED_MODULE_0__.users.count({});
        const users = await _models__WEBPACK_IMPORTED_MODULE_0__.users.findAll({
            where: {
                role: {
                    [sequelize__WEBPACK_IMPORTED_MODULE_1__.Op.ne]: userRole
                }
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
        const totalPages = Math.ceil(totalUsers / limit);
        return res.status(200).send({
            users,
            totalPages
        });
    } catch (error) {
        res.status(500).send("Error in finding stores, please try again!");
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(2218)));
module.exports = __webpack_exports__;

})();