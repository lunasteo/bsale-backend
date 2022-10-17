import { check } from 'express-validator';
import validateResult from '../helpers/validateHelper.js';

const validateSearch = [
    check('productSearch')
        .exists()
        .not()
        .isEmpty()
        .custom((value) => {
            return value.match(/^[A-Za-z ]+$/);
        }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export default validateSearch;