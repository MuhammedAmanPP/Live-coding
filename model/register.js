const { DataTypes } = require('sequelize')
const sequelize=require('../config/db')

const user=sequelize.define('users',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, // true by default
        primaryKey: true, // false by default
        autoIncrement: true, // false by default
        unique: true,
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false
      },
      password:{
        type:DataTypes.STRING,
        allowNull:false
      }
})

user.sync({ alter: true }).then(()=>{
console.log('success');
}).catch((err)=>{
console.log('sync error',err);   
})

module.exports=user;