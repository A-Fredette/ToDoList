const cssClass = {
  text : 'todo-text',
  incomplete : 'incomplete',
  complete: 'complete',
  trashIcon : 'far fa-trash-alt',
  checkIcon : 'fas fa-check-square',
  uncheckedIcon : 'fas fa-square'
};

const toDoInterface = {
  list : document.getElementById('todo-list'),
  itemCountSpan : document.getElementById('item-count'),
  uncheckedCountSpan : document.getElementById('unchecked-count'),
  itemCount : (checkedCounter, uncheckedCounter) => {
    checkedCounter.innerHTML = toDoInterface.list.querySelectorAll(".complete").length;
    uncheckedCounter.innerHTML = toDoInterface.list.querySelectorAll(".incomplete").length;
  },
  icons :
    '<div class="icon-container">' +
      '<i class="far fa-square"></i>' +
      '<i class="far fa-trash-alt" onClick="deleteToDo(this)"></i>' +
    '</div>'
};

deleteToDo = (el) => {
  el.closest('li').remove();
};

checkUncheck = (el) => {
  const elements = el.target.closest('li');

  if (elements.querySelectorAll('.fa-square').length > 0) {
    const squareIcon = elements.querySelectorAll('.fa-square');

    squareIcon[0].classList.add('fas', 'fa-check-square');
    squareIcon[0].classList.remove('fa-square', 'far');

    elements.classList.remove(cssClass.incomplete);
    elements.classList.add(cssClass.complete);

  } else {
    const checkIcon = elements.querySelectorAll('.fa-check-square');

    checkIcon[0].classList.add('far', 'fa-square');
    checkIcon[0].classList.remove('fa-check-square', 'fas');

    elements.classList.add(cssClass.incomplete);
    elements.classList.remove(cssClass.complete);
  }

  toDoInterface.itemCount(toDoInterface.itemCountSpan, toDoInterface.uncheckedCountSpan)
};

newTodo = () => {
  const li = document.createElement("li");
  const toDo = prompt("What's your to do?", "Study coding");

  if (toDo === null || '') return;

  const liText = document.createTextNode(toDo);

  li.onclick = (li) => { checkUncheck(li); };
  li.innerHTML= toDoInterface.icons;
  li.appendChild(liText);
  li.setAttribute('class', cssClass.incomplete);

  toDoInterface.list.appendChild(li);
  toDoInterface.itemCount(toDoInterface.itemCountSpan, toDoInterface.uncheckedCountSpan)
};
