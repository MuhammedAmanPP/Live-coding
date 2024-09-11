const { DataTypes } = require('sequelize')
const sequelize=require('../config/db');


const note=sequelize.define('notes',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, // true by default
        primaryKey: true, // false by default
        autoIncrement: true, // false by default
        unique: true,
      },
      userId:{
        type:DataTypes.NUMBER,
        allowNull:false
      },
      note:{
        type:DataTypes.STRING,
        allowNull:false
      },
})

note.sync({ alter: true }).then(()=>{
console.log('success');
}).catch((err)=>{
console.log('sync error',err);   
})

module.exports=note;