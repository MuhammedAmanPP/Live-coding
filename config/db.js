const Sequelize=require('sequelize')
const db={
    database:'live-coding',
    user:'liveProject_user',
    port:5432,
    host:'localhost',
    password:'nothing'
}

const sequelize=new Sequelize(db.database,db.user,db.password,{
    host:db.host,
  dialect:'postgres'
})

module.exports=sequelize;