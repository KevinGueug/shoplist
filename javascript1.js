var input = document.getElementById("usrinput");
var addbutton = document.getElementById("btn-add");
var shoplist = document.getElementById("shoplist");


//Add list Items and a button with delete function
function addListItem(){
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        shoplist.appendChild(li);
        input.value="";
    //create Button
    var create = document.createElement("button");
    create.className="deleteListItem";
    li.appendChild(create);
    //delete function
    var i;
    var smallDeleteButton = document.getElementsByClassName("deleteListItem");
    for (i = 0; i < smallDeleteButton.length; i++){
    smallDeleteButton[i].addEventListener("click", function(){
        var div = this.parentElement;
        div.style.display="none";
})}}

//The add button
addbutton.addEventListener("click", function(){
    if (input.value.length > 1) { addListItem();}})
//The keypress
usrinput.addEventListener("keypress", function(){
    if (input.value.length > 1 && event.keyCode==13){addListItem();}})

//The Delete button
    var deleteButton = document.getElementById("btn-rem");
    deleteButton.addEventListener("click", function(){
        shoplist.innerHTML="";
    })

//line-through
var ul = document.querySelector("ul");
ul.onclick=function(){
event.target.classList.toggle("done");
}