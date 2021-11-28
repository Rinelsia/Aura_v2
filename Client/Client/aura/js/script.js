"use strict"
//Запускает скрипт после прогрузки HTML
document.addEventListener("DOMContentLoaded",EventList, false);
//==============================================================
//Описание глобальных констант и переменных
// В константе каждая разметка разбита на части для добавления пермнных. В данном случае атрибут name. Пока н придумал ничего нового
const HTML_TEXT = {
        "in_txt" : [
            ' <p><button type="button">X</button><textarea name="p',
            '" id="" maxlength="1024" placeholder="Содержение не более 1024 символов"></textarea></p>'
        ],
        "in_img" : [
            '<p><button type="button">X</button><input type="file" name="img',
            '"></p>'
        ]
    };
var $_num_click = 0;
//===========================================================




//Обработка кнопок
function EventList(){
    $_num_click = 0;
//    toListen("menu-1","navi");
    toListen("button","comment");
    // 1-й входящий, 2-й исходящий
    insertToElement("input","in_txt");
    insertToElement("input","in_img");
    // удаляет дочерние элементы из родителя   
    deleteElement("input");
}
//===============================================================
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
//
function insertToHtml(id_to, id_in){
//    в эту пременную будет присваиваться текст разметки из массива, ключем которого будут запросы клика
    $_num_click++;
    let id_to_elem = document.getElementById(id_to),
        text_html = HTML_TEXT[id_in][0]+'_'+$_num_click+HTML_TEXT[id_in][1];
    console.log(text_html);
//    id_to_elem.innerHTML = text_html;
    if($_num_click<=10){
        id_to_elem.insertAdjacentHTML("beforeend",text_html);
//        document.addEventListener("DOMContentLoaded",function(){deleteElement("close")}, false);
//        deleteElement(id_to);
    }else{
        id_to_elem.insertAdjacentHTML("beforeend","<p style='color:red'>Вы достигли максимума блоков</p>");
    }
    
}
//=======================================================
//Функция удалния элемента, где elem выступает родительский элемент, и произвидит поиск(делегирование) на котором произошел клик
function deleteElement(elem){
    let el = document.getElementById(elem);
   
    el.addEventListener("click", function(){
        let nod = event.target.closest('button');
        console.log(nod.parentNode);
        nod.parentNode.remove();
    },"false");
}










