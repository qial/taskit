var exports = module.exports;

var task = require('../models/task');

exports.listTasks = function(req, res) {
    var id = req.query.id || "";
    
    var context = {
        siteTitle: "Taskit List Page",
        testMessage: "Test message woooo"
    };
    
    var template = __dirname + '/../views/list';
    res.render(template, context);
    
    // Just responding with a string, without any template:
    // res.status(200).send('Hello World');
}

exports.showTask = function(req, res) {
    var id = req.query.id || "";

    if( id != "" ) {
        task.
    }
}