'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipes', [
      {
        name: 'Scrambled Eggs',
        author: 'Fernando Estrada',
        description: 'A classic recipe for a quick and easy scrambled egg.',
        ingredients: 'Eggs, butter, salt, pepper, olive oil.',
        directions:
          '1. Preheat your pan for a min, letting it get hot.\n' +
          '2. Add in your olive oil and cover the bottom lining of the pan.\n' +
          '3. Lower the heat and place your butter.\n' +
          "4. Allow the butter to melt, but don't burn it.\n" +
          '5. When the butter melts, add in the eggs and stir them slow!.\n' +
          '6. Season with the salt and pepper.\n' +
          '7. Plate and enjoy!.\n',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  },
};
