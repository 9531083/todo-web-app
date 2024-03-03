//js codes of project
let myForm = document.querySelector('.todo-form');
let toDoText = document.querySelector('.text-input');
let number = 0;
// create li func after "enter"
myForm.addEventListener('submit', function(){
    if (toDoText.value != ''){
        let listItem = document.createElement('li'); //creat li
        listItem.innerHTML = toDoText.value; // put the input text in li with value
        let ulSubject = document.querySelector('.ul-list'); //take ul: the father of li    
        ulSubject.appendChild(listItem); //put li in ul with appendChild
        toDoText.value = null;
        number = number + 1;
        document.querySelector('.total span').innerHTML = number
        console.log(number);
        let listitem
    }else{
        alert('Type a task')
    }
});
