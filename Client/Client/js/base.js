"use strict"
//
class InterFace
{
    read(){
        console.log("Запущен интрфейс");
    }
}
//
class AsinJAX
{
    //Работа с ассинхронными запросами
    request(){
        var ajax = new XMLHttpRequest();
        ajax.open('GET','http://localhost:1000/file.json', true);
        ajax.responseType = 'json';
        ajax.send();

        ajax.onload = function(){
            let d = ajax.response;
            console.log('d'+d);
            alert('d'+d);
        }
    } 

}