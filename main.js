let input1 = document.querySelector('.form-input1');
let input2 = document.querySelector('.form-input2');
let button = document.querySelector('.form-button');
let list = document.querySelector('ol');

//створення рахування суми

function getSum() {
    let sum = Number(input1.value) + Number(input2.value);
    return sum;
}


// створення пунктів внизу
function createListItem(text) {
     let li = document.createElement('li');
     let span = document.createElement('span');
     let btn = document.createElement('button');

     span.textContent = text;
     btn.textContent = 'delete';

     li.append(span);
     li.append(btn);

     return li;
}



button.addEventListener('click', event => {
let ol = createListItem(getSum());
list.append(ol);
} )
