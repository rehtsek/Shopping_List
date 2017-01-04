$(document).ready(function(){
  //alert('page is ready');
//var data = {};
// var myList = displayShoppingList(getList());
var getList = getList();
var myList = displayShoppingList(getList);
//alert(myList);
$('#display-shopping-list').html(myList);
$('#add-item-to-list').on('click', function(){
  //alert("I am adding item to the list");
  var newItem = $('#newList').val();
  console.log(creatNewList(newItem));
  //return false;
});
var myShoppingLists = "ekShoppingList";
$("#sitem li").click(function () {
 $("#sitem li").wrap("<strike>");
});
//function for creating new shopping list
function creatNewList(newItem){
	//localStorage.removeItem("ekShoppingList");
	var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
if(existingEntries == null){ existingEntries = {} };
//var listname = $("#newList").val();
	var newShoppingList = {};
	newShoppingList[newItem] = [];
  //existingEntries[newItem] = newShoppingList;
 $.extend(existingEntries, newShoppingList );

localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
//console.log(JSON.stringify(existingEntries));
return JSON.stringify(existingEntries)
}

//adding item to a shopping list 
//require: listName
function addItem(listName){
	var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
	var entryItem = $("#item").val();
    var entryQty = $("#quantity").val();
   var len = existingEntries[listName].length-1;
   if(len == -1){i=1}else{
    var i = existingEntries[listName][len];
	i = i.id;
	i = i+1;}
	console.log(i);
  existingEntries[listName].push(
    {id: i, item: entryItem, quantity: entryQty, status: "new"}
);

localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
console.log(JSON.stringify(existingEntries));
}

function getList(){
  //var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
  var existingEntries = JSON.parse(localStorage.getItem("ekShoppingList"));
 
  return existingEntries;
  /*var keys = [];
   for(var k in existingEntries) keys.push(k);

$.each(keys,function(i,obj) {

    $('<li style="color:black" onclick="getListItems(\'' + obj + '\')">',{text:obj}).appendTo("#shoplists");
});*/

//console.log(JSON.stringify(keys));
}
function displayShoppingList(shoppingList){
	//var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
 
  var htmlList = ""; 
  $.each(shoppingList, function( key, value ) {
  
  htmlList += '<li><a href="#">'+key+'</a></li>';

 });

 return htmlList;

//console.log(JSON.stringify(keys));
}

function getListItems(listName){
	var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
var c = existingEntries[listName];
$( ".new-list" ).hide();
$( "#shoplists" ).hide();
$('<label for="male">'+listName+'</label>').appendTo("#itemLists");

c.forEach(function(obj) { 
  $('<li>',{text:obj.item + ': '+obj.quantity }).appendTo("#itemLists");
  $('<input type="button" class="btn btn-primary" value="Del" onclick="deleteItem(\'' + listName + '\',\'id\',\'' + obj.id + '\');" />').appendTo("#itemLists");
  //console.log(obj.item);
});
$('<input type="text" placeholder="Item Name" id="item">').appendTo("#itemLists");
$('<input type="text" placeholder="Quantity" size="5" id="quantity">').appendTo("#itemLists");
$('<input type="button" class="btn btn-primary" value="Add" onclick="addItem(\'' + listName + '\');" />').appendTo("#itemLists");
//console.log(JSON.stringify(c));
}

function updateStatus(listName, property, value){
	 var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
	 $.each(existingEntries[listName], function(index, result) {
        	
            if (result[property] == value) {
            	console.log(index);
				existingEntries[listName][index].status = "bought";
                return false;
            }

        });   

    localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
}
	
   function deleteItem1(listName, index) {
   var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
   existingEntries[listName].splice(index,1);  

    localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
	console.log(JSON.stringify(existingEntries));
}

//to-do work on item name
   function deleteItem(listName, property, value) {
   var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
        $.each(existingEntries[listName], function(index, result) {
        	
            if (result[property] == value) {
            	console.log(index);
                existingEntries[listName].splice(index,1);
                return false;
            }

        });   

    localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
}

function deleteList(listName){
var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
delete existingEntries[listName];
localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
}

function showList(){
	var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
	console.log(JSON.stringify(existingEntries));

}

});