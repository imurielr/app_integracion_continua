import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/', controller.hello)
  .get('/add', controller.addReq)
  .get('/sub', controller.subReq)
  .get('/mult', controller.multReq)
  .get('/div', controller.divReq)
  .get('/mod', controller.modReq);
