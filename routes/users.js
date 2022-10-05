var express = require('express');
var router = express.Router();
const { db } = require('./../db.js')

/* GET users listing. */
router.get('/', async function (req, res, next) {

  const users = await db.user.findMany();

  res.status(200).json({
    status: 'success',
    data: users
  });
});

/* Create User */
router.post('/', async function (req, res, next) {
  const user = await db.user.create({
    data: req.body
  })
  res.status(200).json({
    status: 'success',
    data: user
  });
});

/* Update User */
router.put('/:id', async function (req, res, next) {
  const user = await db.user.update({
    where:{
      id: req.params.id
    },
    data: req.body
  })
  res.status(200).json({
    status: 'success',
    data: user
  });
});

router.delete('/:id', async function (req, res, next) {
  const user = await db.user.delete({
    where:{
      id: req.params.id
    }
  })
  res.status(200).json({
    status: 'success',
    data: user
  });
});

module.exports = router;
