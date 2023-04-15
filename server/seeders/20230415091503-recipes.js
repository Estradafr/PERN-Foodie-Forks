'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipes', [
      {
        name: 'Bacon Cheeseburger',
        author: 'Fernando Estrada',
        description:
          'A juicy bacon cheeseburger that will knock your socks off!',
        ingredients:
          'Bacon, pepper jack cheese, lettuce, tomato, pickles, burger sauce',
        directions:
          "Mix a tablespoon of mayo with about half a tablespoon of mustard and ketchup. Then you'll cook your burger well done, toast your buns until golden. Add your toppings as desired, make sure to put the 'toppings' on bottom so you get the best bite possible everytime! Enjoy!",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  },
};
