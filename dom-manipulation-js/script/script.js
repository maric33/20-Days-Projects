'use strict'

const divMain = document.querySelector('.content');

const pMain = document.createElement('p');
pMain.style.color = 'red';
pMain.textContent = "Hey I'm red!"

divMain.append(pMain);

const header3 = document.createElement('h3');
header3.style.color = 'blue';
header3.textContent = "i'm a blue h3!"

divMain.appendChild(header3);

const divNew = document.createElement('div');
divNew.style.border = '2px solid black';
divNew.style.backgroundColor = 'pink';
divMain.append(divNew);

const header1 = document.createElement('h1');
header1.textContent = "I'm in a div";
divNew.append(header1);

const pSecond = document.createElement('p');
pSecond.textContent = 'ME TOO!';
divNew.append(pSecond);