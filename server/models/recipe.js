'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init(
    {
      recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      author: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      ingredients: { type: DataTypes.TEXT, allowNull: false },
      directions: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Recipe',
      tableName: 'recipes',
      timestamps: false,
    }
  );
  return Recipe;
};
