// psql -U posgres

module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "77809075",
    DB: "web",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};