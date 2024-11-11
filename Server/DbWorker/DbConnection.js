const Sequelize = require("sequelize");
var sq = new Sequelize("Ripple", "postgres", "123", {
    dialect: "postgres",
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
exports.User.hasMany(exports.Post);

sq.sync({ force: true }).then(() => {
    console.log("Database synced");
}).catch((error) => {
    console.log("error")
});
