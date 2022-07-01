const addButton = document.querySelector(".first-show").querySelector("img");
const firstShow = document.querySelector(".first-show").querySelector("#list");
const list = document.querySelector(".entered");
const filter = document.querySelector(".filter").querySelector("#filter");


addButton.addEventListener('click', addToDo);
filter.addEventListener('click', filterd);
document.addEventListener('DOMContentLoaded', getToDo);

function addToDo(event) {
    event.preventDefault();

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("entered-list");
    

    const newToDo = document.createElement("p");
    newToDo.innerHTML = firstShow.value;
    toDoDiv.appendChild(newToDo);
    addLocalToDo (firstShow.value);
    firstShow.value = "";
    
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");
    toDoDiv.appendChild(imageDiv);

    const ok = document.createElement("img");
    ok.src = "./pic/icons8_ok_32.png";
    ok.classList.add("ok");
    ok.addEventListener('click',toDoOk);
    imageDiv.appendChild(ok);

    const deleted = document.createElement("img");
    deleted.src = "./pic/icons8_delete_document_32.png";
    deleted.classList.add("deleted");
    deleted.addEventListener('click',deleteToDo);
    imageDiv.appendChild(deleted);

    list.appendChild(toDoDiv);
    
};

function toDoOk(event) {
    event.target.parentElement.parentElement.classList.toggle("used");
};

function deleteToDo(event) {
    event.target.parentElement.parentElement.classList.add("trash");
    removeLocalToDo();
};

function addLocalToDo(toDo){
    let list ;
    if (localStorage.getItem("list") === null) {
        list = [];
    }else {
        list = JSON.parse(localStorage.getItem("list"));
    }
    list.push(toDo);
    localStorage.setItem("list" , JSON.stringify(list));
}

function removeLocalToDo(toDo){
    let list;
    if (localStorage.getItem("list") === null) {
        list = [];
    }else {
        list = JSON.parse(localStorage.getItem("list"));
    }
    list.splice(list.indexOf(toDo),1);
    localStorage.setItem("list" , JSON.stringify(list));
}

function filterd(event) {
    const toDos =  list.childNodes;
    toDos.forEach(function(toDo) {
        switch (event.target.value) {
        case "all":
            toDo.style.display = "flex";
            break;
        case "done":
            if (toDo.classList.contains("used")) {
                toDo.style.display = "flex";
            }else{
                toDo.style.display = "none";
            }
            break;
        case "undone":
            if (toDo.classList.contains("used")) {
                toDo.style.display = "none";
            }else{
                toDo.style.display = "flex";
            } 
            break;
        }
    });
}

function getToDo(){
    let todos;
    if (localStorage.getItem("list") === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("list"));
    };

    todos.forEach(function(toDo) {
        
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo");

    const newToDo = document.createElement("p");
    newToDo.innerHTML = toDo;
    toDoDiv.appendChild(newToDo);
    
    const imageDiv = document.createElement("image-div");
    imageDiv.classList.add("image-div");
    toDoDiv.appendChild(imageDiv);

    const ok = document.createElement("img");
    ok.src = "./pic/icons8_ok_32.png";
    ok.classList.add("ok");
    ok.addEventListener('click',toDoOk);
    imageDiv.appendChild(ok);

    const deleted = document.createElement("img");
    deleted.src = "./pic/icons8_delete_document_32.png";
    deleted.classList.add("deleted");
    deleted.addEventListener('click',deleteToDo);
    imageDiv.appendChild(deleted);

    list.appendChild(toDoDiv);

    });
}; 
