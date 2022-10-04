
// task 1
/*< html>
<body>
 <div>Користувачі:</div>
 <ul>
 <li>Джон</li>
 <li>Піт</li>
 </ul>
</body>

</html>*/

// document.body.firstElementChild;
// document.body.lastElementChild;
// document.body.lastElementChild.lastElementChild;


// task 2
/* Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
 Неверно. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы.*/


// task 4
/*for (let li of document.querySelectorAll('li')) {
  
}

for (let li of document.querySelectorAll('li')) {
  let title = li.firstChild.data;

}
*/
 

 // task 5
/* <html>
<body>
 <script>
 alert(document.body.lastChild.nodeType);
 </script>
</body>
</html>
у <script> последним DOM узлом является script,поэтому 1 элемент*/


// task 7
/*alert(document); // [object HTMLDocument] - обьект класса HTMLDocument
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype._proto_.constructor.name); // Document
alert(HTMLDocument.prototype._proto_._proto_.constructor.name); // Node*/


// task 8
/*function clear(elem) {
  for (let i=0; i < elem.childNodes.length; i++) {
      elem.childNodes[i].remove();
  }
}*/


// task 9
 // внутри <table> не может быть текста-только табличные теги. Поэтому браузер показывает "aaa" до <table>
 // автоматически исправляя ошибку


 