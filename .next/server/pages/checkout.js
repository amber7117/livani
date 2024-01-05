"use strict";
(() => {
var exports = {};
exports.id = 2222;
exports.ids = [2222];
exports.modules = {

/***/ 9690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Checkout_CheckoutContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__(5927);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(7105);
// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__(279);
;// CONCATENATED MODULE: external "react-stripe-checkout"
const external_react_stripe_checkout_namespaceObject = require("react-stripe-checkout");
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Checkout/OrderSummary.js




const CheckoutForm = ({ StripeCheckout , handleCheckout , user  })=>{
    const cartItems = (0,external_react_redux_.useSelector)((state)=>state.cartItems);
    const totalPrice = cartItems.length > 0 && cartItems.reduce((acc, item)=>acc + item.price * item.quantity, 0);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-lg-6 col-md-12",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "order-details",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "title",
                    children: "Your Order"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "order-table table-responsive",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "table table-bordered",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            scope: "col",
                                            children: "Product Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            scope: "col",
                                            children: "Total"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                children: [
                                    cartItems.length > 0 && cartItems.map((cartItem, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "product-name",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: cartItem.name
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    className: "product-total",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "subtotal-amount",
                                                        children: [
                                                            "$",
                                                            cartItem.price,
                                                            ".00"
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, i)),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "total-price",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Order Total"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "product-subtotal",
                                                children: totalPrice > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "subtotal-amount",
                                                    children: [
                                                        "$",
                                                        totalPrice,
                                                        ".00"
                                                    ]
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "subtotal-amount",
                                                    children: "$0"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "payment-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "payment-method",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "radio",
                                            id: "direct-bank-transfer",
                                            name: "radio-group",
                                            value: "payment",
                                            onChange: (e)=>e
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Direct Order"
                                        }),
                                        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "radio",
                                            id: "direct-bank-transfers",
                                            name: "radio-group",
                                            value: "stripe",
                                            checked: true,
                                            onChange: (e)=>e
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Stripe"
                                        })
                                    ]
                                })
                            ]
                        }),
                        user ? /*#__PURE__*/ jsx_runtime_.jsx(StripeCheckout, {
                            name: "Livani",
                            amount: parseInt(totalPrice),
                            currency: "USD",
                            shippingAddress: true,
                            billingAddress: true,
                            zipCode: true,
                            stripeKey: "pk_test_xyteqRGWdKBGpFXHZe3zOelk00t3YAyhHH",
                            token: handleCheckout,
                            triggerEvent: "onClick",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "default-btn",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    "Place Order ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "flaticon-right"
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/log-in",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "default-btn",
                                children: [
                                    "Please Login To Complete Your Order",
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "flaticon-right"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const OrderSummary = (CheckoutForm);

;// CONCATENATED MODULE: ./components/Checkout/CheckoutContent.js











const INITIAL_USERDETAILS = {
    country: "",
    name: "",
    companyName: "",
    address: "",
    city: "",
    email: "",
    phone: ""
};
function CheckoutContent({ user , store  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: userDetails , 1: setuserDetails  } = (0,external_react_.useState)(INITIAL_USERDETAILS);
    const { addToast  } = (0,external_react_toast_notifications_.useToasts)();
    const { livani_token  } = (0,external_nookies_.parseCookies)();
    const { 0: countryName , 1: setcountryName  } = (0,external_react_.useState)("Browse Category");
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const cartItems = (0,external_react_redux_.useSelector)((state)=>state.cartItems);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setuserDetails((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    const totalPrice = cartItems.length > 0 && cartItems.reduce((acc, item)=>acc + item.price * item.quantity, 0);
    const handleCheckout = async (paymentData)=>{
        try {
            const { name , address , city , phone , email  } = userDetails;
            const productDetails = {
                orderItems: cartItems,
                country: countryName,
                name,
                address,
                city,
                phone,
                email,
                totalPrice
            };
            const url = `${baseUrl/* default */.Z}/api/v1/checkout`;
            const payload = {
                paymentData,
                productDetails
            };
            await external_axios_default().post(url, payload, {
                headers: {
                    Authorization: livani_token
                }
            });
            dispatch({
                type: "CLEAR_CART_ITEMS"
            });
            addToast("Order Placed Successfully", {
                appearance: "success"
            });
            router_default().push("/");
        } catch (error) {
            (0,catchErrors/* default */.Z)(error, window.alert);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "checkout-area ptb-100",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12 col-md-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "user-actions",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "icofont-ui-file"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        "Returning customer?",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "Click here to login!"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: (e)=>e.preventDefault(),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "billing-details",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "title",
                                            children: "Billing Details"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                children: [
                                                                    "Country",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "required",
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "select-box",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                                    className: "form-control",
                                                                    onChange: (e)=>setcountryName(e.target.value),
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "usa",
                                                                            children: "United Arab Emirates"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "china",
                                                                            children: "China"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "united kingdom",
                                                                            children: "United Kingdom"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "germany",
                                                                            children: "Germany"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "france",
                                                                            children: "France"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                            value: "japan",
                                                                            children: "Japan"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                children: [
                                                                    "Name",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "required",
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                className: "form-control",
                                                                name: "name",
                                                                value: userDetails.name,
                                                                onChange: handleChange
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                children: "Company Name"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                className: "form-control",
                                                                name: "companyName",
                                                                value: userDetails.companyName,
                                                                onChange: handleChange
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                children: [
                                                                    "Address",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "required",
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                className: "form-control",
                                                                name: "address",
                                                                value: userDetails.address,
                                                                onChange: handleChange
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                children: [
                                                                    "Town / City",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "required",
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                className: "form-control",
                                                                name: "city",
                                                                value: userDetails.city,
                                                                onChange: handleChange
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6 col-md-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                children: [
                                                                    "Postcode / Zip",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "required",
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                name: "zip",
                                                                className: "form-control"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-6 col-md-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                children: [
                                                                    "Email Address",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "required",
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "email",
                                                                className: "form-control",
                                                                name: "email",
                                                                value: userDetails.email,
                                                                onChange: handleChange
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "form-group",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                children: [
                                                                    "Phone",
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "required",
                                                                        children: "*"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "text",
                                                                className: "form-control",
                                                                name: "phone",
                                                                value: userDetails.phone,
                                                                onChange: handleChange
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-12",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form-group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            name: "notes",
                                                            id: "notes",
                                                            cols: "30",
                                                            rows: "4",
                                                            placeholder: "Order Notes",
                                                            className: "form-control"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(OrderSummary, {
                                StripeCheckout: (external_react_stripe_checkout_default()),
                                totalPrice: totalPrice,
                                handleCheckout: handleCheckout,
                                user: user
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Checkout_CheckoutContent = (CheckoutContent);


/***/ }),

/***/ 8283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6137);
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4399);
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3538);
/* harmony import */ var _components_Checkout_CheckoutContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9690);
/* harmony import */ var _components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(521);
/* harmony import */ var _components_Common_InstagramFeed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7968);
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8348);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__]);
_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Checkout = ({ user , store  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                user: react__WEBPACK_IMPORTED_MODULE_8__.useRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                user: user
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: "Checkout",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Checkout"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Checkout_CheckoutContent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                store: store,
                user: user
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_InstagramFeed__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? "https://livani-react.envytheme.com" : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


/***/ }),

/***/ 279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const catchErrors = (error, displayError)=>{
    let errorMsg;
    if (error.response) {
        errorMsg = error.response.data;
        // console.error("Error response", errorMsg.description);
        // for image upload
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message;
        }
    } else if (error.request) {
        // Request made but no response recieved
        errorMsg = error.request;
    // console.error("Error request", errorMsg);
    } else {
    // console.error("Error message", errorMsg);
    }
    displayError(errorMsg);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catchErrors);


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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 4208:
/***/ ((module) => {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,7788,833,8348,9223,7968,521,3538], () => (__webpack_exec__(8283)));
module.exports = __webpack_exports__;

})();