const CONTROLLER = require('../controllers/buckets.controller')

module.exports = app => {
    app.post('/api/buckets', CONTROLLER.create);
    app.get('/api/buckets', CONTROLLER.find);
    app.get('/api/bucket/:id', CONTROLLER.findOne);
    app.put('/api/bucket/:id', CONTROLLER.update);
    app.delete('/api/bucket/:id', CONTROLLER.delete);
    // app.get('/api/buckets-by-user/:username', CONTROLLER.getbucketsByUser)
};