"use strict";
(() => {
var exports = {};
exports.id = 1501;
exports.ids = [1501];
exports.modules = {

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 7355:
/***/ ((module) => {

module.exports = require("validator/lib/isLength");

/***/ }),

/***/ 4306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7355);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_1__);


const { Op  } = __webpack_require__(496);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "POST":
            await createProduct(req, res);
            break;
        case "PUT":
            await updateProduct(req, res);
            break;
        case "GET":
            await getProducts(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const createProduct = async (req, res)=>{
    // console.log(req.body);
    const { userId , storeId , productImage , hoverImage , name , description , price , oldPrice , newProduct , availability , offer , onSale , discount , discountPercent , productType ,  } = req.body;
    try {
        if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_0___default()(name, {
            min: 3
        })) {
            return res.status(422).send("The name should be a minimum of Three characters long");
        } else if (!description) {
            return res.status(422).send("description required");
        } else if (!price) {
            return res.status(422).send("price required");
        } else if (!productType) {
            return res.status(422).send("productType required");
        }
        await _models__WEBPACK_IMPORTED_MODULE_1__.products.create({
            userId,
            storeId,
            productImage,
            hoverImage,
            name,
            description,
            price,
            oldPrice,
            newProduct,
            availability,
            offer,
            onSale,
            discount,
            discountPercent,
            productType
        });
        res.send("Product created successfully!");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error in creating Product, please try again!");
    }
};
const updateProduct = async (req, res)=>{
    const { id , userId , storeId , productImage , hoverImage , name , description , price , oldPrice , newProduct , availability , offer , onSale , discount , discountPercent , productType ,  } = req.body;
    try {
        let product = await _models__WEBPACK_IMPORTED_MODULE_1__.products.findByPk(id);
        await product.update({
            userId,
            storeId,
            productImage,
            hoverImage,
            name,
            description,
            price,
            oldPrice,
            newProduct,
            availability,
            offer,
            onSale,
            discount,
            discountPercent,
            productType
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
        res.status(200).json({
            products
        });
    } catch (error) {
        res.status(403).json({
            message: "Invalid token"
        });
    }
};
const getProducts = async (req, res)=>{
    const { page , limit , keyword  } = req.query;
    try {
        //search
        const searchKeyword = keyword ? keyword : "";
        //pagination
        const pageNumber = parseInt(page);
        const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber;
        const postsOffset = limit * (getRealNumber - 1);
        const totalProducts = await _models__WEBPACK_IMPORTED_MODULE_1__.products.count({});
        const products = await _models__WEBPACK_IMPORTED_MODULE_1__.products.findAll({
            where: {
                name: {
                    [Op.iLike]: "%" + searchKeyword + "%"
                }
            },
            order: [
                [
                    "createdAt",
                    "ASC"
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(4306)));
module.exports = __webpack_exports__;

})();