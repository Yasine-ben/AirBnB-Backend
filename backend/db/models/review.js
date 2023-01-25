'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.hasMany(models.ReviewImage,{foreignKey:"reviewId"})
      Review.belongsTo(models.Spot)
      Review.belongsTo(models.User)
    }
  }
  Review.init({
    spotId: {
      type:DataTypes.INTEGER,
      references:{model:"Spots",key:'id'},
      allowNull:false,
      onDelete:"CASCADE"
  },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{model:"Users",key:'id'},
      onDelete:"CASCADE"
    },
    review: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    stars: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        min:0,
        max:5
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};