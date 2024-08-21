
let todoStorage = [];
const defaultController = (req , res) =>{
    res.render('index',{todos:todoStorage});
}
let count = 1;

const addTodoController = (req , res) => {
    console.log(req.body.todo);
    const todoObj ={
        id: count++,
        fname: req.body.fname,
        email: req.body.email,
        number: req.body.number,
        skill: req.body.skill
    }
    todoStorage = [...todoStorage,todoObj];
    res.redirect('/');
}
const readTodoController = (req , res) => {
    console.log("read page");
    res.render('read',{todos:todoStorage})
}
const editTodoController = (req , res)=> {
    console.log("edit controller");
    const id = req.params.id;
    const SingleRec = todoStorage.find((todo)=> todo.id == id);
    console.log('SingleRec',SingleRec);
    res.render('edit',{SingleRec});
    
}
const updateTodoController = (req , res) => {
    console.log("updatedRec",req.body.fname);
    let updatedTodo = todoStorage.map((todo) => {
        if(todo.id == req.params.id){
            return {
                ...todo,
                fname: req.body.fname,
                email: req.body.email,
                number: req.body.number,
                skill: req.body.skill
            };
        }else{
            return todo;
        }
    })
    todoStorage = updatedTodo;
    res.redirect('/');    
}
const deleteTodoController = (req , res) => {
    console.log("delete controller");
    const id = req.params.id;
    todoStorage = todoStorage.filter((todo)=> todo.id != id);
    res.redirect('/');
}
module.exports = {defaultController, addTodoController,editTodoController,updateTodoController,deleteTodoController,readTodoController};