"use strict";
(() => {
var exports = {};
exports.id = 2658;
exports.ids = [2658];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 8111:
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
            await handleGetRequest(req, res);
            break;
        case "PUT":
            handlePutRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
});
const handleGetRequest = async (req, res)=>{
    try {
        const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(req.headers.authorization, "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd");
        const user = await _models__WEBPACK_IMPORTED_MODULE_1__.users.findOne({
            attributes: {
                exclude: [
                    "password"
                ]
            },
            where: {
                id: userId
            }
        });
        const store = await _models__WEBPACK_IMPORTED_MODULE_1__.stores.findOne({
            where: {
                userId: userId
            },
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ],
            include: [
                {
                    model: _models__WEBPACK_IMPORTED_MODULE_1__.products,
                    as: "products"
                }, 
            ]
        });
        if (user) {
            res.status(200).json({
                user,
                store
            });
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        // console.log(error);
        res.status(403).send("Invalid token");
    }
};
const handlePutRequest = async (req, res)=>{
    const { id , role  } = req.body;
    // console.log(id, role);
    try {
        await _models__WEBPACK_IMPORTED_MODULE_1__.users.update({
            role: role
        }, {
            where: {
                id: id
            }
        });
        res.status(203).send("User Updated");
    } catch (error) {
        console.log(error);
        res.status(403).send("User not updated");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(8111)));
module.exports = __webpack_exports__;

})();