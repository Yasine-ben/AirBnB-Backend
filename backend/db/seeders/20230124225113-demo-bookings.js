'use strict';
const bcrypt = require("bcryptjs");
let options = {}
if(process.env.NODE_ENV === 'developement') {
  options.schema = process.env.SCHEMA;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //options.tableName = 'Bookings';
    //return queryInterface.bulkInsert(options, [], {});
  },

  async down (queryInterface, Sequelize) {
    //options.tableName = "Bookings";
    //const Op = Sequelize.Op;
    //return queryInterface.bulkDelete(options, {});
  }
};
