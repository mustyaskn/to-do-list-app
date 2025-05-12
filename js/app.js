// app.js
import { addTodo, deleteTodo, loadTodos, updateTodo } from "./storage.js";
import { clearInput, renderTodos } from "./ui.js";

// JS'in etkileşime gireceği HTML öğeleri tanımlama
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const editInput = document.getElementById("edit-input");
const saveEditButton = document.getElementById("save-edit-button");
// Javascript ile Modal tanımlama
const editModal = new bootstrap.Modal(document.getElementById('edit-modal'));

// Güncelleme işlemi için editTodo ile gelen index'i tutacak bir global değişken tanımalama
let editingIndex = null;

const addTodoToLocalStorage = () => {
    // Input girişindeki string bilgi al ve sağ-sol boşlukları temizle
    const todo = todoInput.value.trim();
    // Eğer input girişinde herhangi birşey yazılmamışsa uyarı ver ve işlemi sonlandır
    if (!todo) {
        alert("Yapılacak bir öğe giriniz!");
        return; /*Geri kalan kodları çalıştırma*/
    }
    // Input girişinde birşeyler yazılmışsa ekleme işlevini çağır
    addTodo(todo);
    renderTodos(loadTodos(),todoList);
    clearInput(todoInput);
}

// addButton'a tıklanınca todo ekleme işlemi
addButton.addEventListener("click",addTodoToLocalStorage);
// Enter'a basınca todo ekleme işlemi
todoInput.addEventListener("keypress",(event) => event.key === "Enter" && addTodoToLocalStorage() );

// Silme butonu işlevi
window.deleteTodoFromLocalStorage = (index) =>{
    deleteTodo(index);
    renderTodos(loadTodos(),todoList);
}

// Düzenleme butonu işlevi
window.editTodo = (index) => {
    const todos = loadTodos();
    const todo = todos[index];
    editInput.value = todo.text;
    editingIndex = index;
}

// todos dizisini uygulama ilk açıldığında yükleme
document.addEventListener("DOMContentLoaded",() => renderTodos(loadTodos(),todoList));

// Kaydetme butonu işlevi
saveEditButton.addEventListener("click",() => {
    if (editInput.value) {
        updateTodo(editingIndex,editInput.value);
        renderTodos(loadTodos(),todoList);
        editModal.hide();
    }
});