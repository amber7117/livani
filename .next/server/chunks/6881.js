"use strict";
exports.id = 6881;
exports.ids = [6881];
exports.modules = {

/***/ 6328:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 6881:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _user = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(8470));
const _store = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(1777));
const _product = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(7083));
const _order = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(5920));
const _orderitem = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(4413));
const Sequelize = __webpack_require__(496);
const env = "production" || 0;
const config = __webpack_require__(4025)[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
db.users = (0, _user.default)(sequelize, Sequelize);
db.stores = (0, _store.default)(sequelize, Sequelize);
db.products = (0, _product.default)(sequelize, Sequelize);
db.orders = (0, _order.default)(sequelize, Sequelize);
db.orderitems = (0, _orderitem.default)(sequelize, Sequelize);
db.users.hasOne(db.stores, {
    as: "stores",
    foreignKey: "userId"
});
db.stores.belongsTo(db.users, {
    as: "users",
    foreignKey: "userId"
});
db.stores.hasMany(db.products, {
    as: "products",
    foreignKey: "storeId"
});
db.products.belongsTo(db.stores, {
    as: "stores",
    foreignKey: "storeId"
});
db.users.hasMany(db.products, {
    as: "products",
    foreignKey: "userId"
});
db.products.belongsTo(db.users, {
    as: "users",
    foreignKey: "userId"
});
db.orders.belongsTo(db.users, {
    as: "users",
    foreignKey: "userId"
});
db.users.hasMany(db.orders, {
    onDelete: "cascade",
    as: "users",
    foreignKey: "userId"
});
db.orders.hasMany(db.orderitems, {
    as: "ordersItem",
    foreignKey: "orderId"
});
db.orderitems.belongsTo(db.orders, {
    as: "orders",
    foreignKey: "orderId"
});
db.products.hasMany(db.orderitems, {
    as: "products",
    foreignKey: "productId"
});
db.orderitems.belongsTo(db.products, {
    as: "products",
    foreignKey: "productId"
});
db.sequelize = sequelize;
module.exports = db;


/***/ }),

/***/ 5920:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, DataTypes)=>{
    class Order extends Model {
        /**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */ static associate(models) {
        // define association here
        }
    }
    Order.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        storeId: {
            type: DataTypes.UUID,
            allowNull: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        country: DataTypes.STRING,
        city: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        totalPrice: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isPaid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isDelivered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: "Order"
    });
    return Order;
};


/***/ }),

/***/ 4413:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, DataTypes)=>{
    class OrderItem extends Model {
        /**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */ static associate(models) {
        // define association here
        }
    }
    OrderItem.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        storeId: {
            type: DataTypes.UUID,
            allowNull: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: true
        },
        productId: {
            type: DataTypes.UUID,
            allowNull: true
        },
        orderId: {
            type: DataTypes.UUID,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: "OrderItem"
    });
    return OrderItem;
};


/***/ }),

/***/ 7083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, DataTypes)=>{
    class Product extends Model {
        /**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */ static associate(models) {
        // define association here
        }
    }
    Product.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        storeId: {
            type: DataTypes.UUID,
            allowNull: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: true
        },
        productImage: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
        hoverImage: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.INTEGER
        },
        oldPrice: {
            type: DataTypes.INTEGER
        },
        newProduct: {
            type: DataTypes.STRING
        },
        availability: {
            type: DataTypes.STRING
        },
        offer: {
            type: DataTypes.STRING
        },
        onSale: {
            type: DataTypes.STRING
        },
        discount: {
            type: DataTypes.STRING
        },
        discountPercent: {
            type: DataTypes.STRING
        },
        productType: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: "Product"
    });
    return Product;
};


/***/ }),

/***/ 1777:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, DataTypes)=>{
    class Store extends Model {
        /**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */ static associate(models) {
        // define association here
        }
    }
    Store.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        web: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        aboutText: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.ENUM,
            defaultValue: "pending",
            values: [
                "pending",
                "approved",
                "decline"
            ]
        }
    }, {
        sequelize,
        modelName: "Store"
    });
    return Store;
};


/***/ }),

/***/ 8470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, DataTypes)=>{
    class User extends Model {
        /**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */ static associate(models) {
        // define association here
        }
    }
    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user"
        }
    }, {
        sequelize,
        modelName: "User"
    });
    return User;
};


/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = JSON.parse('{"development":{"username":"postgres","password":"123456","database":"livani","host":"127.0.0.1","dialect":"postgres"},"test":{"username":"postgres","password":null,"database":"database_test","host":"127.0.0.1","dialect":"postgres"},"production":{"username":"postgres","password":null,"database":"database_production","host":"127.0.0.1","dialect":"postgres"}}');

/***/ })

};
;