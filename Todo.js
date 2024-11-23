
function addTask(category, task) {
    if (!category || !task) {
        console.log('Invalid input. Please provide both category and task.');
        return;
    }

    tasks.push({ category, task });
}

function listTasks(category) {
    let result = [];

    if (category === 'all') {
        for (let item of tasks) {
            result.push(`${item.category}: ${item.task}`);
        }
    } else {
        for (let item of tasks) {
            if (item.category === category) {
                result.push(`${item.category}: ${item.task}`);
            }
        }
    }

    return result;
}

function removeTask(category, task) {
    let taskFound = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].category === category && tasks[i].task === task) {
            tasks.splice(i, 1);
            taskFound = true;
            break;
        }
    }

    if (!taskFound) {
        console.log(`Task not found: "${task}" in category "${category}"`);
    }
}

console.log("Test Case 1: List all tasks in all categories");
console.log(listTasks('all'));

console.log("\nTest Case 2: List all tasks in 'Work' category");
console.log(listTasks('Work'));

console.log("\nTest Case 3: Add a new task to 'Personal' category");
addTask('Personal', 'Go for a walk');
console.log(listTasks('Personal'));

console.log("\nTest Case 4: Remove a specific task from 'Home' category");
removeTask('Home', 'Fix the leaky faucet');
console.log(listTasks('Home'));

console.log("\nTest Case 5: List all tasks in all categories after modification");
console.log(listTasks('all'));

console.log("\nTest Case 6: Remove a task that doesn't exist");
removeTask('Work', 'Attend lunch meeting');
console.log(listTasks('Work'));

console.log("\nTest Case 7: List all tasks in 'Personal' category after adding new task");
console.log(listTasks('Personal'));
