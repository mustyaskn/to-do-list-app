// ui.js

// Input'daki girilen bilgiyi temizleme
export const clearInput = (inputElement) => {
    inputElement.value = "";
}

// Input'a veri girişi sonrası render(görüntüleme) işleminin yapılması
export const renderTodos = (todos, todoListElement) => {
    // ul etiketi içerisindeki listeleri temizleme
    todoListElement.innerHTML = "";
    // localStorage'den gelen todos dizisini listeleme olarak ekleme
    todos.forEach((todo,index) => {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        li.innerHTML = `
            <div>
                <span class="badge bg-info text-dark">${todo.date}</span> ${todo.text}
            </div>
            <div>

                <button class="btn btn-success btn-sm" id="edit-button"
                onclick="editTodo(${index})" data-bs-toggle="modal" data-bs-target="#edit-modal">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>

                <button class="btn btn-danger btn-sm" id="delete-button" onclick="deleteTodoFromLocalStorage(${index})">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>

            </div>
        `;
        todoListElement.appendChild(li);
    });
}