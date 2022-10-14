const prisma = require('@prisma/client');
const db = new prisma.PrismaClient();

const DB1 = require('./node_modules/@generated/db1').PrismaClient;
const DB2 = require('./node_modules/@generated/db2').PrismaClient;


const db1 = new DB1();

const db2 = new DB2();


module.exports = {db,db1,db2}