"use strict"
//Запускает скрипт после прогрузки HTML
document.addEventListener("DOMContentLoaded",EventList, false);
//
function drag(ev){
    console.log(ev);
}
function start(ev){
    console.log(ev);
}
//
function end(ev){
    console.log(ev);
}

//Работа с ассинхронными запросами
//var ajax = new XMLHttpRequest();
//ajax.open('GET','http://localhost:1000/file.json', true);
//ajax.responseType = 'json';
//ajax.send();
//
//ajax.onload = function(){
//    
//    let d = ajax.response;
//    console.log('d'+d);
//}
////let xhr = new XMLHttpRequest();
////
////xhr.open('GET', 'http://localhost:1000/');
////
////xhr.responseType = 'json';
////
////xhr.send();
////
////// тело ответа {"сообщение": "Привет, мир!"}
////xhr.onload = function() {
////  let responseObj = xhr.response;
////  alert(responseObj.message); // Привет, мир!
////};

//Обработка кнопок
function EventList(){
//    toListen("button");
    
}

// Функция слушателя на кнопках
function toListen(id){
    if(id){
        let elem = document.getElementById(id);
        elem.addEventListener("click", VisibleContent, false)
    }
    else{
        return "undefined";
    }
    
}
//Включение и выключение элемента
function VisibleContent(){
    var id_comment = document.getElementById("comment");
    id_comment.setAttribute('style', 'display: flex');
    
    //запуск работы интерфейса
    new InterFace().read();
    // Запуск работы  аякс
    new AsinJAX().request();
}













