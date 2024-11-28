"use client";

export function Todolist() {
  const handleAdd = () => {
    const inputElement =
      document.querySelector<HTMLInputElement>("#todo-input");
    const todoListElement =
      document.querySelector<HTMLDivElement>("#todo-list");
    const taskCountElement =
      document.querySelector<HTMLHeadingElement>("#task-done-count");

    if (inputElement && todoListElement && inputElement.value.trim() !== "") {
      // Create new todo item
      const todoItem = document.createElement("div");
      todoItem.className =
        "w-[40%] flex flex-1 justify-center items-center align-middle justify-self-center pb-5";

      // Add text and icons
      todoItem.innerHTML = `
        <div class="flex flex-1 justify-start items-center align-middle">
          <img
            src="https://cdn-icons-png.flaticon.com/512/64/64571.png"
            alt="not done"
            class="w-[3%] h-[3%] float-left cursor-pointer status-icon"
          />
          <p class="text-l pl-4 pr-4 text-white">${inputElement.value}</p>
        </div>
        <img
          src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-rounded-flat-vector-icon-of-a-red-trash-can-vector-picture-image_9721363.png"
          alt="delete"
          class="w-[3%] h-[3%] cursor-pointer delete-task"
        />
      `;

      // Append to list
      todoListElement.appendChild(todoItem);

      // Add event listeners for Status and Delete icons
      const statusIcon =
        todoItem.querySelector<HTMLImageElement>(".status-icon");
      const deleteButton = todoItem.querySelector(".delete-task");

      if (statusIcon) {
        statusIcon.addEventListener("click", () => {
          if (statusIcon.alt === "not done") {
            // Change icon to done
            statusIcon.src =
              "https://cdn-icons-png.flaticon.com/512/845/845646.png"; // New icon for 'done'
            statusIcon.alt = "done";

            // Update task done count
            if (taskCountElement) {
              const currentCount = parseInt(
                taskCountElement.dataset.count || "0"
              );
              taskCountElement.dataset.count = (currentCount + 1).toString();
              taskCountElement.innerText = `Task Done : ${currentCount + 1}`;
            }
          }
        });
      }

      if (deleteButton) {
        deleteButton.addEventListener("click", () => {
          todoItem.remove();
        });
      }

      // Clear input
      inputElement.value = "";
    }
  };

  return (
    <div className="flex flex-col justify-center align-middle text-center content-center ml-[34%]">
      <label
        htmlFor="todo-input"
        className="block font-bold text-white w-[7%] mb-3 mr-[100%]"
      >
        Add todo
      </label>
      <input
        id="todo-input"
        type="text"
        className="w-[50%] h-[40px] rounded-lg bg-transparent border-[1px] border-white text-white mb-5 pl-5"
      />
      <button
        onClick={handleAdd}
        className="w-[9%] h-[35px] rounded-lg bg-white text-[#1C202C] text-[15px] font-bold bg-[#8BCFF5]"
      >
        ADD TASK
      </button>
    </div>
  );
}
