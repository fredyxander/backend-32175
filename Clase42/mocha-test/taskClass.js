class TaskClass{
    constructor(){
        this.taskList=[];
    };

    //metodos
    list(){
        return this.taskList;
    };

    add(title){
        const newTask={
            title:title,
            completed:false
        };
        this.taskList.push(newTask);
    };
};

export {TaskClass}

// [
//     {
//         title:"",
//         completed:true//true | false
//     }
// ]