"use strict"
//Запускает скрипт после прогрузки HTML
document.addEventListener("DOMContentLoaded",EventList, false);
//==============================================================
//Описание глобальных констант и переменных
// В константе каждая разметка разбита на части для добавления пермнных. В данном случае атрибут name. Пока н придумал ничего нового
const HTML_TEXT = {
        "in_txt" : [
            ' <p><textarea name="p',
            '" id="" maxlength="1024" placeholder="Содержение не более 1024 символов"></textarea></p>'
        ],
        "in_img" : [
            '<p><input type="file" name="img',
            '"></p>'
        ]
    };
var $_num_click = 0;
//===========================================================
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
    $_num_click = 0;
//    toListen("menu-1","navi");
    toListen("button","comment");
    // 1-й входящий, 2-й исходящий
    insertToElement("input","in_txt");
    insertToElement("input","in_img");    
}

// Функция слушателя на кнопках
function toListen(id_out, id_to){
    if(id_out){
        let elem = document.getElementById(id_out);
        if(elem){elem.addEventListener("click", function(){VisibleContent(id_to)}, false);}
    }
    else{
        return "undefined";
    }
    
}
//Включение и выключение элемента
function VisibleContent(e){
    var id_comment = document.getElementById(e),
        atr = id_comment.getAttribute("style");
    console.log(e);
    if(atr !=='display: flex'){
        console.log(atr);
        console.log(e);
        id_comment.setAttribute('style', 'display: flex');
    }else{
        id_comment.setAttribute('style', 'display: none');
    }
    
    
//    //запуск работы интерфейса
//    new InterFace().read();
//    // Запуск работы  аякс
//    new AsinJAX().request();
}
//=======================================================
//функция вставки hml элементов в указанное id место
function insertToElement(id_to, id_in){
    //id_in - входящий запрос кнопки
    //id_to - мсто вставки html элемента
    
    if(id_in){
        let  id_in_elem = document.getElementById(id_in);
        id_in_elem.addEventListener("click", function(){insertToHtml(id_to, id_in)}, "false");
    }else{
        return "undefined"
    }
}
function insertToHtml(id_to, id_in){
//    в эту пременную будет присваиваться текст разметки из массива, ключем которого будут запросы клика
    $_num_click++;
    let id_to_elem = document.getElementById(id_to),
        text_html = HTML_TEXT[id_in][0]+'_'+$_num_click+HTML_TEXT[id_in][1];
//    id_to_elem.innerHTML = text_html;
    if($_num_click<=10){
        id_to_elem.insertAdjacentHTML("beforeend",text_html);
    }else{
        id_to_elem.insertAdjacentHTML("beforeend","<p style='color:red'>Вы достигли максимума блоков</p>");
    }
}
//=======================================================











