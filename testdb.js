const {db1,db2} = require('./db.js');

const getDb1 = async ()=>{
    const user1 = await db1.user.findMany();
    console.log(user1);
}

const getDb2 = async ()=>{
    const user2 = await db2.user.findMany();
    console.log(user2);
}

getDb1()
getDb2()