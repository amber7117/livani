"use strict";
exports.id = 1028;
exports.ids = [1028];
exports.modules = {

/***/ 1028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductDetails_ProductDetailsStyleOne)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__(5927);
// EXTERNAL MODULE: ./components/ProductDetails/ProductDetailsTab.js
var ProductDetailsTab = __webpack_require__(5995);
// EXTERNAL MODULE: ./components/ProductDetails/RelatedProducts.js
var RelatedProducts = __webpack_require__(2196);
;// CONCATENATED MODULE: ./components/ProductDetails/ProductImage.js


const ProductImage = ({ imageUrl  })=>{
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "products-details-image",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "products-details-image-slides",
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: imageUrl && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: imageUrl[index],
                        alt: "image"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "product-thumbs",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: imageUrl && imageUrl.slice(0, 4).map((img, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: img,
                                alt: "image",
                                onClick: ()=>setIndex(i)
                            })
                        }, i))
                })
            })
        ]
    });
};
ProductImage.defaultProps = {
    shopImage: [
        {
            id: 1,
            image: "../../images/products/img3.jpg"
        },
        {
            id: 2,
            image: "../../images/products/img4.jpg"
        },
        {
            id: 3,
            image: "../../images/products/img-hover3.jpg"
        },
        {
            id: 4,
            image: "../../images/products/img-hover4.jpg"
        },
        {
            id: 5,
            image: "../../images/products/img7.jpg"
        }, 
    ]
};
/* harmony default export */ const ProductDetails_ProductImage = (ProductImage);

;// CONCATENATED MODULE: ./components/ProductDetails/ProductDetailsStyleOne.js








const ProductDetailsStyleOne = ({ product , products  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { addToast  } = (0,external_react_toast_notifications_.useToasts)();
    const { 0: qty , 1: setQty  } = (0,external_react_.useState)(1);
    const { 0: max , 1: setMax  } = (0,external_react_.useState)(10);
    const { 0: min , 1: setMin  } = (0,external_react_.useState)(1);
    const addToCart = (product)=>{
        let productObj = {};
        productObj["id"] = product.id;
        productObj["storeId"] = product.storeId;
        productObj["name"] = product.name;
        productObj["price"] = product.price;
        productObj["image"] = product.productImage;
        productObj["quantity"] = qty;
        dispatch({
            type: "ADD_TO_CART",
            data: productObj
        });
        addToast("Added to the cart successfully", {
            appearance: "success"
        });
        setQty(1);
    };
    const increment = ()=>{
        setQty(qty + 1);
    };
    const decrement = ()=>{
        setQty(qty - 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "product-details-area pt-100 pb-70",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5 col-md-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductDetails_ProductImage, {
                                    imageUrl: product.productImage
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "products-details-desc",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: product.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "price",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    product.offer ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "old-price",
                                                        children: [
                                                            "$",
                                                            product.oldPrice
                                                        ]
                                                    }) : "",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "new-price",
                                                        children: [
                                                            "$",
                                                            product.price
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "products-review",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "rating",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bx-star"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bx-star"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bx-star"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bx-star"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "bx bx-star"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        onClick: (e)=>e.preventDefault(),
                                                        className: "rating-count",
                                                        children: "3 reviews"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "products-info",
                                            children: [
                                                product.availability && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Availability:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: [
                                                                    "In stock (",
                                                                    product.availability,
                                                                    " items)"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Products Type:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: product.productType
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "products-color-switch",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Color:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    title: "Black",
                                                                    className: "color-black"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    title: "White",
                                                                    className: "color-white"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "active",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    title: "Green",
                                                                    className: "color-green"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    title: "Yellow Green",
                                                                    className: "color-yellowgreen"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    title: "Teal",
                                                                    className: "color-teal"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "products-size-wrapper",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Size:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "XS"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "active",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "S"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "M"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "XL"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "XXL"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "products-info-btn",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        onClick: (e)=>e.preventDefault(),
                                                        "data-toggle": "modal",
                                                        "data-target": "#sizeGuideModal",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bx-crop"
                                                            }),
                                                            "Size guide"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        onClick: (e)=>e.preventDefault(),
                                                        "data-toggle": "modal",
                                                        "data-target": "#productsShippingModal",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxs-truck"
                                                            }),
                                                            "Shipping"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bx-envelope"
                                                            }),
                                                            "Ask about this products"
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "products-add-to-cart",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "input-counter",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "minus-btn",
                                                            onClick: decrement,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bx-minus"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            value: qty,
                                                            min: min,
                                                            max: max,
                                                            onChange: (e)=>e
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "plus-btn",
                                                            onClick: increment,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bx-plus"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "default-btn",
                                                    onClick: ()=>addToCart(product),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-cart-plus"
                                                        }),
                                                        "Add to Cart"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "wishlist-compare-btn",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        onClick: (e)=>e.preventDefault(),
                                                        className: "optional-btn",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bx-heart"
                                                            }),
                                                            "Add to Wishlist"
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        onClick: (e)=>e.preventDefault(),
                                                        className: "optional-btn",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bx-refresh"
                                                            }),
                                                            "Add to Compare"
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "buy-checkbox-btn",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            className: "inp-cbx",
                                                            id: "cbx",
                                                            type: "checkbox"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                            className: "cbx",
                                                            htmlFor: "cbx",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        width: "12px",
                                                                        height: "10px",
                                                                        viewBox: "0 0 12 10",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                                            points: "1.5 6 4.5 9 10.5 1"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "I agree with the terms and conditions"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            onClick: ()=>addToCart(product),
                                                            className: "default-btn",
                                                            children: "Buy it now!"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProductDetailsTab/* default */.Z, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RelatedProducts/* default */.Z, {
                products: products
            })
        ]
    });
};
/* harmony default export */ const ProductDetails_ProductDetailsStyleOne = (ProductDetailsStyleOne);


/***/ })

};
;