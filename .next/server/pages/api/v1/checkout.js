"use strict";
(() => {
var exports = {};
exports.id = 5054;
exports.ids = [5054];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 8271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);
uuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const stripe = __webpack_require__(8174)("sk_test_u704p2U4oM3G2rft3xenXD4a00Q5QCnuHm");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "POST":
            await handleStripeRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const handleStripeRequest = async (req, res)=>{
    try {
        const { paymentData , productDetails  } = req.body;
        const { orderItems , country , name , address , email , city , phone , totalPrice , storeId ,  } = productDetails;
        const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(req.headers.authorization, "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd");
        const prevCustomer = await stripe.customers.list({
            email: paymentData.email,
            limit: 1
        });
        const isExistingCustomer = prevCustomer.data.length > 0;
        let newCustomer;
        if (!isExistingCustomer) {
            newCustomer = await stripe.customers.create({
                email: paymentData.email,
                source: paymentData.id
            });
        }
        const customer = isExistingCustomer && prevCustomer.data[0].id || newCustomer.id;
        const charge = await stripe.charges.create({
            currency: "usd",
            amount: totalPrice,
            receipt_email: paymentData.email,
            customer,
            description: `Checkout | ${paymentData.email} | ${paymentData.id}`
        }, {
            idempotencyKey: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()
        });
        const newOrder = new _models__WEBPACK_IMPORTED_MODULE_0__.orders({
            userId,
            name,
            address,
            country,
            city,
            phone,
            email,
            totalPrice
        });
        const { id  } = await newOrder.save();
        await createOrderItems(orderItems, userId, storeId, id);
        res.send(charge);
    } catch (err) {
        res.send(err);
    }
};
const createOrderItems = async (orderItems, userId, storeId, id)=>{
    const promiseItems = orderItems.map((order)=>new _models__WEBPACK_IMPORTED_MODULE_0__.orderitems({
            name: order.name,
            quantity: order.quantity,
            image: order.image,
            price: order.price,
            productId: order.id,
            storeId,
            userId,
            orderId: id
        }).save());
    await Promise.all(promiseItems);
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
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(8271)));
module.exports = __webpack_exports__;

})();