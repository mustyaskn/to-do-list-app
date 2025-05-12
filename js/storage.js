// storage.js
import { getDate } from "./utils/date.js";

// todos veri setini localStorage'den okuma
export const loadTodos = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

// yeni todos adlı veri setini localStorage'e kaydetme
const saveTodos = (todos) => {
    localStorage.setItem("todos",JSON.stringify(todos));
}

//Input'a girilen bilgiyi localStorage'e kaydetme
export const addTodo = (todo) => {
    // localStorage'den veri okuma
    const todos = loadTodos();
    // Eklenecek yeni todo'yu bir nesne olarak oluşturma
    const newTodo = {
        text: todo,
        date: getDate()
    };
    // Yeni todo'yu var olan todos dizisine ekleme
    todos.push(newTodo);
    // Veriyi localStorage'e kaydetme
    saveTodos(todos);
}

// Silme butonuna tıklandığında ilgili listenin silinmesi
export const deleteTodo = (index) => {
    // Var olan todos listesini localStorage'den okuma
    const todos = loadTodos();
    // İlgili todo'yu gelen index'e göre silme
    todos.splice(index,1);
    // Değişiklik yapılan todos listesini kaydetme
    saveTodos(todos);
}

// Modal üzerinden todos güncelleme
export const updateTodo = (index,updatedTodoText) => {
    // Veri setini okuma
    const todos = loadTodos();
    // İlgili todoyu güncelleme
    todos[index] = {
        text:updatedTodoText,
        date:getDate()
    };
    // Veri setini kaydetme
    saveTodos(todos);
}