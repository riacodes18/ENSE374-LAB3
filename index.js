class user
{
constructor(user_name, pass_word)

{
this.username = user_name;
this.password = pass_word;
}

}




class task 
{

constructor (id, some_name, some_owner, some_creator, done, cleared)

{
this.id = id;
this.name = some_name;
this.owner = some_owner;
this.creator = some_creator;
this.done = true;
this.cleared = false;
}

}


var user_1 = new user ("joy123", "321yoj");
var user_2 = new user("bill567", "765llib");



var task_1 = new task(1, "task_1", "", "", false, true);
var task_2 = new task(2, "task_2", user_1, user_1, false, false);
var task_3 = new task(3, "task_3", user_2, user_2, false, false);
var task_4 = new task(4, "task_4", user_1, user_1, true, false);
var task_5 = new task(5, "task_5", user_2, user_2, true, false);



var list_users = {user_1, user_2};
var list_tasks = {task_1, task_2, task_3, task_4, task_5};


const fs = require('fs');



var myuserstring = fs.readFileSync('users.json');
var mytaskstring = fs.readFileSync('task.json');



var USER = JSON.parse(myuserstring);
var TASK = JSON.parse(mytaskstring);



console.log(USER);
console.log(TASK);




console.log('Server');
var express = require('express');


var set = express();
set.listen = 3000;



set.get('/users', function userfunc(req, res){

    res.send(users);
}
); 

 

set.get('/task', function taskfunc(req, res){
    
    res.send(tasks);
} 
); 

