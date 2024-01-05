"use strict";
exports.id = 728;
exports.ids = [728];
exports.modules = {

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BlogDetails_CommentsList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/BlogDetails/CommentForm.js


class CommentForm extends external_react_.Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "comment-respond",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "comment-reply-title",
                    children: "Leave a Reply"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "comment-form",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "comment-notes",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Your email address will not be published."
                                }),
                                "Required fields are marked",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "required",
                                    children: "*"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "comment-form-author",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    children: [
                                        "Name ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "required",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    id: "author",
                                    placeholder: "Your Name*",
                                    name: "author",
                                    required: "required"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "comment-form-email",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    children: [
                                        "Email ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "required",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    id: "email",
                                    placeholder: "Your Email*",
                                    name: "email",
                                    required: "required"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "comment-form-url",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "Website"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "url",
                                    id: "url",
                                    placeholder: "Website",
                                    name: "url"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "comment-form-comment",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "Comment"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    name: "comment",
                                    id: "comment",
                                    cols: "45",
                                    placeholder: "Your Comment...",
                                    rows: "5",
                                    required: "required"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "comment-form-cookies-consent",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox",
                                    value: "yes",
                                    name: "wp-comment-cookies-consent",
                                    id: "wp-comment-cookies-consent"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "Save my name, email, and website in this browser for the next time I comment."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "form-submit",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "submit",
                                name: "submit",
                                id: "submit",
                                className: "submit",
                                value: "Post A Comment"
                            })
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const BlogDetails_CommentForm = (CommentForm);

;// CONCATENATED MODULE: ./components/BlogDetails/CommentsList.js




class CommentsList extends external_react_.Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "comments-area",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "comments-title",
                    children: "2 Comments:"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                    className: "comment-list",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "comment",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                    className: "comment-body",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                            className: "comment-meta",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "comment-author vcard",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "../images/user1.jpg",
                                                            className: "avatar",
                                                            alt: "image"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            className: "fn",
                                                            children: "John Jones"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "says",
                                                            children: "says:"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "comment-metadata",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "April 24, 2019 at 10:59 am"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "comment-content",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "reply",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "comment-reply-link",
                                                    children: "Reply"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                                    className: "children",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "comment",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                                className: "comment-body",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                                        className: "comment-meta",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "comment-author vcard",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "../images/user2.jpg",
                                                                        className: "avatar",
                                                                        alt: "image"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        className: "fn",
                                                                        children: "Steven Smith"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "says",
                                                                        children: "says:"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "comment-metadata",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "April 24, 2019 at 10:59 am"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "comment-content",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "reply",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "comment-reply-link",
                                                                children: "Reply"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                                                className: "children",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "comment",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                                        className: "comment-body",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                                                className: "comment-meta",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "comment-author vcard",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "../images/user3.jpg",
                                                                                className: "avatar",
                                                                                alt: "image"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                className: "fn",
                                                                                children: "Sarah Taylor"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "says",
                                                                                children: "says:"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "comment-metadata",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "April 24, 2019 at 10:59 am"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "comment-content",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "reply",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "comment-reply-link",
                                                                        children: "Reply"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "comment",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                    className: "comment-body",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                            className: "comment-meta",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "comment-author vcard",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "../images/user4.jpg",
                                                            className: "avatar",
                                                            alt: "image"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                            className: "fn",
                                                            children: "John Doe"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "says",
                                                            children: "says:"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "comment-metadata",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "April 24, 2019 at 10:59 am"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "comment-content",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "reply",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "comment-reply-link",
                                                    children: "Reply"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                                    className: "children",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "comment",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                            className: "comment-body",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                                    className: "comment-meta",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "comment-author vcard",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "../images/user1.jpg",
                                                                    className: "avatar",
                                                                    alt: "image"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    className: "fn",
                                                                    children: "James Anderson"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "says",
                                                                    children: "says:"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "comment-metadata",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "April 24, 2019 at 10:59 am"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "comment-content",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen."
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "reply",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "comment-reply-link",
                                                            children: "Reply"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BlogDetails_CommentForm, {})
            ]
        });
    }
}
/* harmony default export */ const BlogDetails_CommentsList = (CommentsList);


/***/ })

};
;