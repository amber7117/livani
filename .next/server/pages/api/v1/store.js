"use strict";
(() => {
var exports = {};
exports.id = 2529;
exports.ids = [2529];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 7769:
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
            await getAllStores(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const getAllStores = async (req, res)=>{
    const { page , limit  } = req.query;
    const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(req.headers.authorization, "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd");
    const user = await _models__WEBPACK_IMPORTED_MODULE_1__.users.findOne({
        where: {
            id: userId
        }
    });
    //pagination
    const pageNumber = parseInt(page);
    const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber;
    const postsOffset = limit * (getRealNumber - 1);
    try {
        if (user.role === "super-admin") {
            const totalStores = await _models__WEBPACK_IMPORTED_MODULE_1__.stores.count({});
            const stores = await _models__WEBPACK_IMPORTED_MODULE_1__.stores.findAll({
                order: [
                    [
                        "createdAt",
                        "DESC"
                    ]
                ],
                offset: postsOffset,
                limit
            });
            const totalPages = Math.ceil(totalStores / limit);
            return res.status(200).send({
                stores,
                totalPages
            });
        } else {
            return res.status(200).send("no stores available");
        }
    } catch (error) {
        res.status(500).send("Error in finding stores, please try again!");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(7769)));
module.exports = __webpack_exports__;

})();