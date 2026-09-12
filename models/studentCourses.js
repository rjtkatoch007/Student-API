const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const studentCourses = sequelize.define(
  'studentCourses',
  {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },     
  },  
);

module.exports=studentCourses;