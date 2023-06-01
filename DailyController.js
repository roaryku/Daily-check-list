const DailyModel = require('./DailyModel');

// GET

module.exports.getList = async(req, res) => {
    const myList = await DailyModel.find();
    res.send(myList)
}

// POST 

module.exports.saveList = async(req, res) => {
    const { name } = req.body;
    DailyModel.create({ name })
    .then ((data) => {console.log('List Added')
    res.send(data)
    })
}

//DELETE

module.exports.deleteList = async(req, res) => {
    const { _id } = req.body
    DailyModel.findByIdAndDelete(_id)
    .then(() => res.send('List Deleted'))
}

//EDIT

module.exports.editList = async(req, res) => {
    const { _id, name } = req.body
    DailyModel.findByIdAndUpdate( _id, { name } )
    .then(() => res.send('List Updated'))
}