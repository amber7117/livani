"use strict";
(() => {
var exports = {};
exports.id = 9559;
exports.ids = [9559];
exports.modules = {

/***/ 4857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ requests_RequestTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(7105);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Store/StoreRequestPagination.js



const ListingPagination = ({ totalPages  })=>{
    const router = (0,router_.useRouter)();
    let page = parseInt(router.query.page) ? parseInt(router.query.page) : 1;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "pagination-area text-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/admin/store-requests/?page=${page - 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: page === 1 ? "isDisabled prev page-numbers" : "prev page-numbers",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "bx bx-chevrons-left"
                        })
                    })
                }),
                [
                    ...Array(totalPages).keys()
                ].map((x)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/admin/store-requests?page=${x + 1}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: x + 1 === parseInt(router.query.page) ? "current page-numbers" : "page-numbers",
                                children: x + 1
                            })
                        })
                    }, x + 1)),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/admin/store-requests/?page=${page + 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: page === totalPages ? "isDisabled next page-numbers" : "next page-numbers",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "bx bx-chevrons-right"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const StoreRequestPagination = (ListingPagination);

;// CONCATENATED MODULE: ./components/Admin/requests/RequestTable.js





const options = [
    {
        key: "pending",
        text: "Pending",
        value: "pending"
    },
    {
        key: "approved",
        text: "Approved",
        value: "approved"
    }, 
];
const RequestTable = ({ stores , totalPages  })=>{
    const router = (0,router_.useRouter)();
    const updateStatus = async (e)=>{
        const url = `${baseUrl/* default */.Z}/api/v1/store/requests`;
        const payload = {
            id: e.target.id,
            status: e.target.value
        };
        await external_axios_default().put(url, payload);
        router.push("/admin/store-requests");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "admin-table admin-orders-table height-555",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "table-responsive",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "table table-hover mb-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Action"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Store"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            children: "Status"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                children: stores.map((store)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                    name: "cars",
                                                    id: store.id,
                                                    className: "form-control",
                                                    onChange: (e)=>updateStatus(e),
                                                    value: store.status,
                                                    children: options.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: option.value,
                                                            children: option.text
                                                        }, option.key))
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: store.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: store.email
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: store.status === "pending" ? "status-button badge badge_danger" : "status-button badge badge_success",
                                                    children: store.status
                                                })
                                            })
                                        ]
                                    }, store.id))
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StoreRequestPagination, {
                totalPages: totalPages
            })
        ]
    });
};
/* harmony default export */ const requests_RequestTable = (RequestTable);


/***/ }),

/***/ 9432:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7105);
/* harmony import */ var _components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8102);
/* harmony import */ var _components_Admin_requests_RequestTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4857);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_3__]);
_components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const StoreRequests = ({ stores , store , totalPages , user  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                user: user,
                store: store
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "admin-main-content d-flex flex-column",
                children: stores.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Admin_requests_RequestTable__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    stores: stores,
                    totalPages: totalPages
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "empty-store",
                    children: "No Store Available!"
                })
            })
        ]
    });
};
async function getServerSideProps(ctx) {
    const { livani_token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)(ctx);
    const page = ctx.query.page ? ctx.query.page : "1";
    const payload = {
        params: {
            page,
            limit: 10
        },
        headers: {
            Authorization: livani_token
        }
    };
    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z}/api/v1/store`;
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(url, payload);
    const { stores , totalPages  } = response.data;
    return {
        props: {
            stores,
            totalPages
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreRequests);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 6358:
/***/ ((module) => {

module.exports = require("react-dropzone");

/***/ }),

/***/ 5927:
/***/ ((module) => {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,7788,3758,8102], () => (__webpack_exec__(9432)));
module.exports = __webpack_exports__;

})();