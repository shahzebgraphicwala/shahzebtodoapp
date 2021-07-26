var list = document.getElementById("list");

function addTOdo(){
    var todo_item = document.getElementById("todo-item");

    //create li tag with tetx node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)


//create delete button
var delBtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delBtn.setAttribute("class","delbtn")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)

//create edit button
var editBtn = document.createElement("button");
var editText = document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.setAttribute("class","btn")
editBtn.setAttribute("onclick","editItem(this)")

li.appendChild(editBtn)
li.appendChild(delBtn)


list.appendChild(li)

todo_item.value = ""
   
}

function deleteItem(e) {
    e.parentNode.remove()
}


function deleteAll(){
    list.innerHTML = ""
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit todo Item",val )

    e.parentNode.firstChild.nodeValue = editValue
    }
    