const Model = require('../models/bucket.model');

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        Model.create(req.body)
            .then( e => {res.status(201).json(e); console.log('successful create bucket')} )
            .catch( e => { console.log('fail'); res.status(400).json({ message: 'something went wrong in create bucket', errors: e.errors }); });
    },

    find: (req, res) => {
        Model.find()
            // .populate('creator')
            .then( e => res.json(e) )
            .catch( e => res.status(400).json({ message: 'something went wrong in find all buckets', error: e }) );
    },

    findOne: (req, res) => {
        Model.findOne({ _id: req.params.id })
            .then( e => res.json(e) )
            .catch( e => res.json(e) )
    },

    update: (req, res) => {
        Model.findOneAndUpdate({ _id: req.body._id}, req.body, { new: true, runValidators: true })
            .then(e => {console.log('goodchange');res.json(e)} )
            .catch( e => {console.log('failed update'); console.log(e);res.status(400).json({ message: 'something went wrong in edit bucket', errors: e.errors }) })
    },

    delete: (req, res) => {
        Model.deleteOne({ _id: req.params.id })
            .then(e => res.status(201).json(e) )
            .catch(e => res.status(400).json({ message: 'something went wrong in delete bucket', error: e }) )
    },

    // findOneUser: (req, res) => {
    //     console.log('IS THIS WORKING', req.params.id);
    //     User.findOne({ _id: req.params.id })
    //         .then((user) => {
    //         console.log('USERID', user._id);
    //         Model.find({ createdBy: user._id })
    //             .populate('createdBy', 'username email')
    //             .then((buckets) => {
    //                 console.log('bucketSSS'.buckets);
    //                 res.json(buckets);
    //             })
    //             .catch((err) => {
    //                 console.log('ERROR IN Get all', err);
    //                 res.status(400).json({ message: 'something went wrong in find all buckets', error: err });
    //             })
    //             .catch((err) => {
    //                 console.log('ERROR IN Get all', err);
    //                 res.status(400).json({ message: 'something went wrong in find all buckets', error: err });
    //             });
    //     });
    // },
};