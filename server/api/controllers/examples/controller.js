import ExamplesService from '../../services/examples.service';
import { add, sub, mult, div, mod } from '../../../utils/Calculator'; 

export class Controller {
  hello(req, res) {
    res.send('Bienvenido a la simulación. kanalizacija!!!')
  }

  addReq(req, res) {
    
    const num1 = req.query.num1 || 0
    const num2 = req.query.num2 || 0
    
    res.send(`La suma de ${num1} + ${num2} es ${add(parseInt(num1), parseInt(num2))}`)
  }

  subReq(req, res) {
    const num1 = req.query.num1 || 0
    const num2 = req.query.num2 || 0
    
    res.send(`La resta de ${num1} - ${num2} es ${sub(parseInt(num1), parseInt(num2))}`)
  }
  
  multReq(req, res) {
    const num1 = req.query.num1 || 0
    const num2 = req.query.num2 || 0
    
    res.send(`La multiplicación de ${num1} * ${num2} es ${mult(parseInt(num1), parseInt(num2))}`)
  }

  divReq(req, res) {
    const num1 = req.query.num1 || 1
    const num2 = req.query.num2 || 1
    
    res.send(`La división de ${num1} / ${num2} es ${div(parseInt(num1), parseInt(num2))}`)
  }

  modReq(req, res) {
    const num1 = req.query.num1 || 0
    const num2 = req.query.num2 || 0
    
    res.send(`El modulo de ${num1} % ${num2} es ${mod(parseInt(num1), parseInt(num2))}`)
  }

}
export default new Controller();
