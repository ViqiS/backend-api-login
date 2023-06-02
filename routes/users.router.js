const express = require('express');
const UserService = require('../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
validatorHandler(getUserSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  (req, res, next) => {
    try {
      const body = req.body;
      // Resto del código para crear el usuario
    } catch (error) {
      return next(error);
    }
  }
);





router.patch('/:id',
validatorHandler(getUserSchema, 'params'),
(req, res, next ) => {
  try {
    const {id} = req.params;
    res.json({
      message: 'update'
    })
  } catch(error) {
    next(error);
  }
});

router.delete('/:id',
validatorHandler(updateUserSchema, 'params'),
async (req, res , next ) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(201).json({id});
  }catch(error) {
    next(error);
  }
});

module.exports = router;
