import {check} from 'express-validator';
import validateResult from '../helpers/validateHelper.js';

const validateNum = [
    check('id').exists().not().isEmpty().isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export default validateNum;