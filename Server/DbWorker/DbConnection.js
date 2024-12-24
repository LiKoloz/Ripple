const Sequelize = require("sequelize");
var sq = new Sequelize("Ripple", "postgres", "123", {
    dialect: "postgres",
})


exports.User = sq.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
})

exports.Post = sq.define("post", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    checked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
});


exports.Likes = sq.define("likes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
})

exports.Comments = sq.define("comments", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
})

exports.User.hasMany(exports.Post);

exports.Post.belongsToMany(exports.User, { through: exports.Comments });
exports.User.belongsToMany(exports.Post, { through: exports.Comments });

exports.Post.belongsToMany(exports.User, { through: exports.Likes });
exports.User.belongsToMany(exports.Post, { through: exports.Likes });


sq.sync({force: true}).then(() => {
    console.log("Database synced");
}).catch((error) => {
    console.log(error)
});
