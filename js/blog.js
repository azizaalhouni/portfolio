var d = new Date();
document.getElementById('date').innerHTML = d.getTime();

//Add Items to start and end of list
var list = document.getElementsByTagName('ul')[0];//Get the <ul>element
//Add new item to end of list
var newItemLast = document.createElement('li');//createElement
var newTextLast = document.createTextNode('cream');//createTextNode
newItemLast.appendChild(newTextLast);//Add text node to element
list.appendChild(newItemLast);
//Add new item start of list
var newItemFirst = document.createElement('li');//createElement
var newTextFirst = document.createTextNode('kale');//create Text node
newItemFirst.appendChild(newTextFirst);//Add text node to element
list.insertBefore(newItemFirst,list.firstChild);//Add element to list
