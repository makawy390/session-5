const {body} = require('express-validator'); // express-validator

const validationSchema = ()=>{
    return[
        body('title').notEmpty().withMessage("Title is required").isLength({min : 2}).withMessage("title at least min 2 chars"),
        body('price').notEmpty().withMessage("price is required")
    ];
}
module.exports = validationSchema;