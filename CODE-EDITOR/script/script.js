'use strict'

function run(){
    let htmlCode = document.getElementById('html-code').value;
    let cssCode = document.getElementById('css-code').value;
    let jsCode = document.getElementById('js-code').value;
    let output = document.querySelector('iframe').contentDocument;

    output.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.Function(jsCode);


  
}