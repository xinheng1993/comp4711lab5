let config = require('./config');

let  mysql = require('knex')({
  client: 'mysql',
  connection: {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    charset: config.mysql.char
  }
});

module.exports = {
  mysql: mysql,
};