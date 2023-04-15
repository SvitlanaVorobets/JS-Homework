let queue = ['4', '6', '2'];
let list = document.getElementById("list");
let input = document.getElementById("input");

document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("removeButton").addEventListener("click", removeItem);

initLocalStorage();

function initLocalStorage(){
    if(localStorage.getItem("queue")){
        queue = localStorage.getItem("queue").split(",");      
    } else {
        localStorage.setItem("queue", queue);
    }
    list.innerHTML = queue;
}

function addItem(){
    let item = input.value;

    if(item && queue.length < 20){
        queue.push(item);
    } else if(!item){
        alert("Empty input");
    } else if(queue.length >= 20) {
        alert("Its max quantity")
    }
    
    updateQueue();
    input.value = "";
}

function removeItem(){
    queue.shift();
    updateQueue(); 
}

function updateQueue(){
    localStorage.setItem("queue", queue);
    list.innerHTML = queue;
}