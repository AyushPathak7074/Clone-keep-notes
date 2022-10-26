let input = document.querySelector('#txt')
let btn = document.querySelector('#push');
let list = document.querySelector('#list');
   let savedTasks = localStorage.getItem('tasks');
        btn.addEventListener('click', () => {
  let txt = input.value;
   if (txt === "") {
    alert('Please write something to do!');
  }  else {
    let li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    localStorage.setItem("tasks", "todos");
    input.value = '';
    const delBtn = document.createElement("i");
    delBtn.classList.add("fas", "fa-trash-alt");
    li.appendChild(delBtn);
    delBtn.addEventListener('click', e => {
      li.parentNode.removeChild(li);
      localStorage.removeItem("tasks");
    })
  }
})