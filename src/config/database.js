module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gtarefa',
    define: {
        timestamps: true,
        underscored: true,
        underscoreAll: true,
    },
};