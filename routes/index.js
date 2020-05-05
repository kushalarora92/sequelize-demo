const CompanyController = require('../controllers').company;

module.exports = (app) => {
    app.get('/api', (req, res) => {
        return res.status(200).send({
            message: 'Welcome to TODO App'
        })
    });

    app.post('/api/company', CompanyController.create);
}