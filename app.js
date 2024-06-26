let toDoList = [];


while (true) {
    let choice = prompt("What would you like to do:");
    if (choice === "new") {
        let toDoAction = prompt("What do oyu need to do:");
        toDoList.push(toDoAction);
        console.log(`${toDoAction} was added to Todo list.`);
    } else if (choice === "list") {
        console.log('**********');
        let i = 1;
        for (let action of toDoList) {
            console.log(`${i}. ${action}`);
            i++;
        }
        console.log('**********');
    } else if (choice === "delete") {
        console.log('**********');
        let i = 1;
        for (let action of toDoList) {
            console.log(`${i}. ${action}`);
            i++;
        }
        console.log('**********');
        let delIndex = parseInt(prompt("Type the index of the task you would like to delete:"));
        let deleted = toDoList.splice(delIndex - 1, 1);
        console.log(`${deleted[0]} was removed.`)
    } else if (choice === "quit") {
        break;
    }
}
