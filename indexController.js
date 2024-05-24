const calculationModel = require('../models/calculationModel');
const indexView = require('../views/indexView');

const indexController = {
    getIndexPage: (req, res) => {
        indexView.renderIndexPage(req, res);
    },
    addTwoNumbers: (req, res) => {
        const value1 = parseInt(req.query.num1);
        const value2 = parseInt(req.query.num2);
        const result = calculationModel.addNumbers(value1, value2);
        res.json({ data: result, statusCode: 200, message: 'success' });
    }
};

module.exports = indexController;
