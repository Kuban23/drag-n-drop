const item = document.querySelector('.item'); // Для того чтобы браузер понимал, что мы хотим переместить элемент, мы в файле html элеvенту с классом item добавляем атрибут draggable="true" 
const plaseholders = document.querySelectorAll('.placeholder');

// добавляем события для item
item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

// (хотим чтобы элемент оставался там где нам нужно) циклом проходим по элементам, на каждой итерации создавать placeholder из массива  plaseholders
for (const plaseholder of plaseholders) {
   plaseholder.addEventListener('dragover', dragover)
   plaseholder.addEventListener('dragenter', dragenter)
   plaseholder.addEventListener('dragleave', dragleave)
   plaseholder.addEventListener('drop', dragDrop)
}

// создаем функции для того чтобы применить их к слушателям
// когда мы запускаем функцию, то приходит объект event 
function dragstart(event) {
   event.target.classList.add('hold')
   setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
   //console.log('drag end'); 
   event.target.classList.remove('hold')
   event.target.classList.remove('hide')
}

// создадим функции которые будут обрабатывать события dragover, dragenter, dragleave, drop. 
function dragover(event) {
   //console.log('drag over') 
   event.preventDefault()
}

function dragenter(event) {
   event.target.classList.add('hovered')
   //console.log('drag enter')
}

function dragleave(event) {
   event.target.classList.remove('hovered')
   //console.log('drag leave')
}

function dragDrop(event) {
   //console.log('drag Drop')
   event.target.append(item)
   event.target.classList.remove('hovered')
}

