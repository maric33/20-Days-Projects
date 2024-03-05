'use strict'

const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn')
const resetBtn = document.querySelector('#reset');
let count = Number(document.querySelector('.counterNumNull').innerHTML);
let counter = document.querySelector('.counter');

resetBtn.addEventListener('click', function(){
    count = 0;
    document.querySelector('.counterNumNull').innerHTML = 0;
    counter.classList.remove(counter.classList);
    counter.classList.add('counter');
})

increaseBtn.addEventListener('click', function() {
    count++;
    document.querySelector('.counterNumNull').innerHTML = count;

    if (count >= 1){
        counter.classList.remove(counter.classList);
        counter.classList.add('counterPos');
    } else if (count == 0){
        counter.classList.remove(counter.classList);
        counter.classList.add('counter');
    } else if(count <= -1){
        counter.classList.remove(counter.classList);
        counter.classList.add('counterNeg');
    };
    
});

decreaseBtn.addEventListener('click', function() {
    count--
    document.querySelector('.counterNumNull').innerHTML = count;

    if (count >= 1){
        counter.classList.remove(counter.classList);
        counter.classList.add('counterPos');
    } else if (count == 0){
        counter.classList.remove(counter.classList);
        counter.classList.add('counter');
    } else if(count <= -1){
        counter.classList.remove(counter.classList);
        counter.classList.add('counterNeg');
    };

});


