exports = module.exports;

exports.CreateTask = function() {
    var sql = "INSERT INTO `tasks` (text, notes, priority, created, completed, estimate, actual) VALUES ( ?, ?, ?, ?, ?, ?, ?)"

    return sql;
}

// LOL update is tough, actually
exports.UpdateTask = function(task) {
    if(!task.idtasks) {
        // no ID, no Update
        return "";
    }
    var fields = 0;
    var sql = "UPDATE `tasks` SET ";
    if(task.text) {
        sql += "text = ?";
    }
    sql += " WHERE idtasks = ?";
}

exports.CompleteTask = function(task) {
    if(!task.idtasks) {
        // no ID no completion
        return "";
    }
    var sql = "UPDATE `tasks` SET completed = ? WHERE `task`.`idtasks` = ?";
    return sql;
}

exports.DeleteTask = function(task) {
    if(!task.idtasks) {
        // no ID no deletion
    }
    var sql = "DELETE FROM `tasks` WHERE idtasks = ?";
    return sql;
}

exports.FindTask = function(task) {
    var sql = "SELECT FROM `tasks`"
    if(!task.idtasks) {
        // no ID, not sure how to find it 
        // TODO: Search function 
    }
    else {
        var sql = "SELECT FROM `tasks` WHERE idtasks = ?";
        return sql;
    }
    return sql;
}