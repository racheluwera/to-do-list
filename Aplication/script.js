// Select elements
let button = document.getElementById("Btn");
button.addEventListener('click',function(){
    button.style.backgroundColor ="red";
})

// // Function to create a new task
// function createTask(taskText) {
//     // Parent task div
//     const taskDiv = document.createElement("div");
//     taskDiv.className = "flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm mt-2";

//     // Left side: radio + text
//     const leftDiv = document.createElement("div");
//     leftDiv.className = "flex items-center gap-3";

//     const radio = document.createElement("input");
//     radio.type = "checkbox"; // Use checkbox to mark completion
//     radio.className = "w-4 h-4 text-blue-600";

//     const taskTitle = document.createElement("h3");
//     taskTitle.textContent = taskText;
//     taskTitle.className = "text-gray-700";

//     leftDiv.appendChild(radio);
//     leftDiv.appendChild(taskTitle);

//     // Right side: Edit + Delete buttons
//     const actionsDiv = document.createElement("div");
//     actionsDiv.className = "space-x-2";

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.className = "px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg shadow text-sm";

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.className = "px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow text-sm";

//     actionsDiv.appendChild(editBtn);
//     actionsDiv.appendChild(deleteBtn);

    // Append left and right to main taskDiv
    taskDiv.appendChild(leftDiv);
    taskDiv.appendChild(actionsDiv);

    // Add to DOM
    taskContainer.appendChild(taskDiv);

    // Event Listeners
    radio.addEventListener("change", () => {
        if (radio.checked) {
            taskTitle.classList.add("line-through", "text-gray-400");
        } else {
            taskTitle.classList.remove("line-through", "text-gray-400");
        }
    });

    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit your task:", taskTitle.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskTitle.textContent = newText;
        }
    });

    deleteBtn.addEventListener("click", () => {
        taskDiv.remove();
    });
// }

// Add Button Event
addButton.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    createTask(taskText);
    input.value = ""; // clear input
});

// Allow pressing Enter to add a task
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addButton.click();
    }
});
