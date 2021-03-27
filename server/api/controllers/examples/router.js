import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  // .post('/', controller.create)
  // .get('/', controller.all)
  // .get('/:id', controller.byId)
  .get('/add', controller.addReq)
  .get('/sub', controller.subReq)
  .get('/mult', controller.multReq)
  .get('/div', controller.divReq)
  .get('/mod', controller.modReq);
