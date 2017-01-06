//$(document).ready(function(){
  
 //alert('hello');
 $(document).on("pagebeforecreate","#index",function(){
  //alert("pagebeforeshow event fired - pagetwo is about to be shown");
  //$('#display-shopping-list').html("<li>Hello</li><li>World</li>");
  showHomepage();
  
});
 /*$(document).on("pagebeforeshow","#index",function(){
  alert("pagebeforeshow event fired - pagetwo is about to be shown");
  //$('#display-shopping-list').html("<li>Hello</li><li>World</li>");
  //showHomepage();
  
});*/

 //showHomepage();
  //alert("I am adding item to the list");
  

  /*var getList = getList();

  var myShoppingList = displayShoppingList(getList);
   console.log(myShoppingList);
  myList = myShoppingList.shopping_lists;
  var listItems = myShoppingList.shopping_lists_items;
  console.log(listItems);
    $(document).on("pagebeforecreate",function(){
     $('#display-shopping-list').html(myList);
    if(listItems.length > 0){
    for(var j = 0; j < listItems.length; j++){

      $( "body" ).append(listItems[j]);
    
    }
    }
  });*/
function showHomepage(){
var shoppingList = JSON.parse(localStorage.getItem("ekShoppingList"));
var shoppingListObject = {};
  var htmlShoppingItemsData = [];
  var htmlList = "";
  var htmlShoppingItem = ""; 
  $.each(shoppingList, function( key, value ){
    console.log(value);
  var originalKey = key;
  var snakeCaseKey = key.split(" ");
  if(snakeCaseKey.length > 1){
      key = snakeCaseKey.join("_");
  }
  htmlList += '<li><a href="#'+key+'">'+originalKey+'</a></li>';
  var shoppingItem = '<div data-role="page" id="'+key+'">'+
                     '<header data-role="header" data-add-back-btn="true">'+
                      '<h1>'+originalKey+' : Shopping Items.</h1>'+
                     '</header>'+
                     '<div data-role="content">'+
                     '<h3>'+originalKey+' : Shopping Items.</h3>'+
                     '<div class="ui-field-contain">'+
                     '<fieldset data-role="controlgroup" data-type="horizontal">'+
                  //         '<legend></legend>'+
                          '<button class="ui-shadow ui-btn ui-corner-all ui-icon-home ui-btn-icon-right" value="'+key+'">Edit Item</button>'+
                          '<button class="ui-shadow ui-btn ui-corner-all ui-icon-home ui-btn-icon-right" value="'+key+'">Delete</button>'+
                         
                          //<a href="#" class="ui-shadow ui-btn ui-corner-all ui-icon-grid ui-btn-icon-right">Three</a>
                      '</fieldset>'+
                      '</div>'+
                      '<form name="'+key+'" id="'+key+'">'+
                       '<div class="ui-grid-b ui-responsive">'+
                       '<div class="ui-block-a" style="margin-right: 5px;">'+
                            '<input type="text" name="new-shopping-list" class="new-list-item" id="'+key+'-new-list-item" placeholder="add new item to list" value="">'+
                       '</div>'+
                       '<div class="ui-block-b">'+
                            '<input type="text" name="quantity" class="quantity" id="'+key+'-quantity" placeholder="1" value="">'+
                       '</div>'+
                         '<div class="ui-block-c">'+
                            '<a href="#" data-'+key+'-list="'+key+'" class="ui-btn ui-corner-all ui-shadow add-list-item" id="'+key+'-add-list-item">Add Item</a>'+
                         '</div>'+
                         '</div>'+
                      '</form>'+
                        '<table data-role="table" id="table-column-toggle" data-mode="columntoggle" '+
                         'class="ui-responsive table-stroke">'+
                         '<thead>'+
                           '<tr>'+
                             '<th data-priority="1">Index</th>'+
                             '<th data-priority="2">Item</th>'+
                             '<th data-priority="3">Quantity</th>'+
                             '<th data-priority="4">Actions</th>'+
                           '</tr>'+
                         '</thead>'+
                         '<tbody id="'+key+'">';
  
  for(var i = 0; i<value.length; i++){
          // shoppingItem += '<li><a href="#'+value[i].id+'">'+value[i].item+': '+value[i].quantity+'</a></li>';
          var j = i +1;
          shoppingItem += '<tr>'+
                           '<th>'+j+'</th>'+
                           '<td>'+value[i].item+'</td>'+
                           '<td>'+value[i].quantity+'</td>'+
                           '<td><a class="delete-item"  data-shopping-list=\'{"shoppingList":"'+key+'", "item":"'+i+'"}\' href="'+value[i].id+'">delete</a></td>'+
                           '</tr>';
                          //'<p><span>'+value[i].item+'</span>: <span style="margin-right: 5%">'+value[i].quantity+'</span><a>delete</a></p>';
  }
          shoppingItem += '</tbody></table></div></div>';

          htmlShoppingItemsData.push(shoppingItem);
 });
 var shoppingListObject = {
  'shopping_lists' : htmlList,
  'shopping_lists_items' : htmlShoppingItemsData
 };
 myList = shoppingListObject.shopping_lists;
  var listItems = shoppingListObject.shopping_lists_items;
  console.log(listItems);
    
     $('#display-shopping-list').html(myList);
    if(listItems.length > 0){
    for(var j = 0; j < listItems.length; j++){

      $( "body" ).append(listItems[j]);
    
    }
    }

}  
  /*$.mobile.document.on('pagebeforeshow', function() {
    alert($.mobile.activePage.attr('id'));
  });*/
  $.mobile.document.on( "click", "#add-shopping-item", function() {  
  //console.log('good');
  //alert("I am adding item to the list");
  //return false;
  
  var newItem = $('#new-shopping-list').val();
  var originalItem = newItem;
  var snakeCaseKey = newItem.split(" ");
  if(snakeCaseKey.length > 1){
      newItem = snakeCaseKey.join("_");
  }
  console.log(creatNewList(newItem));
  //showHomepage();
   //$("#index").enhanceWithin();
  var htmlList = '<li><a href="#'+newItem+'">'+originalItem+'</a></li>';
  var shoppingItem = '<div data-role="page" id="'+newItem+'">'+
                     '<header data-role="header" data-add-back-btn="true">'+
                      '<h1>'+originalItem+' : Shopping Items.</h1>'+
                     '</header>'+
                     '<div data-role="content">'+
                     '<ul data-role="listview" data-theme="b">'+
                     '</ul>'+
                     '</div>'+
                     '</div>';
   
   console.log(htmlList);
    $( htmlList ).appendTo("#display-shopping-list");
    $( "body" ).append(shoppingItem);
    $("#display-shopping-list").listview("refresh");
    
});  
$.mobile.document.on( "click", ".add-list-item", function() { 
  //$( "#target" ).submit(function( event ) {
    var pageId = $.mobile.activePage.attr('id');
//alert('sounds good');
//return false; 
  var newItem = $("#"+pageId+"-new-list-item").val();
  var quantity = $('#'+pageId+'-quantity').val();
  var dataName = pageId.toLowerCase();
  var shoppingList = $('#'+pageId+'-add-list-item').data(dataName+"List");
  console.log(newItem, quantity, shoppingList);
  //return false;
  
  var addedItem = addItem(shoppingList, newItem, quantity);
  var addedItemId = addedItem.id;
  var addedItemIndex = addedItemId + 1;
  //return false;
  //var htmlList = '<li><a href="#'+newItem+'">'+newItem+'</a></li>';
  var shoppingItem = '<tr>'+
                           '<th>'+addedItemIndex+'</th>'+
                           '<td>'+newItem+'</td>'+
                           '<td>'+quantity+'</td>'+
                           '<td><a class="delete-item"  data-shopping-list=\'{"shoppingList":"'+shoppingList+'", "item":"'+addedItemId+'"}\' href="'+newItem+'">delete</a></td>'+
                           '</tr>';
  /*var shoppingItem = '<div data-role="page" id="'+newItem+'">'+
                     '<header data-role="header" data-add-back-btn="true">'+
                      '<h1>'+newItem+' : Shopping Items.</h1>'+
                     '</header>'+
                     '<div data-role="content">'+
                     '<ul data-role="listview" data-theme="b">'+
                     '</ul>'+
                     '</div>'+
                     '</div>';*/
   
   console.log(shoppingItem);
    $( shoppingItem ).appendTo("#"+shoppingList);
    //$( "body" ).append(shoppingItem);
    $("#"+shoppingList).table("refresh");
    
});
$.mobile.document.on( "click", ".delete-item", function() {  
  //var newItem = $('#new-shopping-list').val();
  alert('you clicked delete');

  var itemId = $(this).data("shoppingList").item;
  var shoppingList = $(this).data("shoppingList").shoppingList;
  console.log(itemId, shoppingList);
  //return false;
  console.log(newDeleteItem(shoppingList, itemId));
  //showHomepage();
   //$("#index").enhanceWithin();
  
    
});            
// $('#display-shopping-list').html(myList);
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
  //showHomepage();
  //$("#display-shopping-list").listview();
  return JSON.stringify(existingEntries)
}

//adding item to a shopping list 
//require: listName
function addItem(listName, item, quantity){
  console.log(listName, item, quantity);
  //return false;
  var myShoppingLists = "ekShoppingList";
	var existingEntries = JSON.parse(localStorage.getItem("ekShoppingList"));
	/*var entryItem = $("#item").val();
    var entryQty = $("#quantity").val();*/
    console.log(typeof existingEntries);
    console.log(existingEntries[listName]);
    //return false;
   var len = existingEntries[listName].length-1;
   if(len == -1){i=1}else{
    var i = existingEntries[listName][len];
	i = i.id;
	i = i+1;}
	console.log(i);
  var itemToAdd = {"id": i, "item": item, "quantity": quantity, "status": "new"};
  /*existingEntries[listName].push(
    {id: i, item: item, quantity: quantity, status: "new"}
);*/
  existingEntries[listName].push(itemToAdd);

localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
console.log(JSON.stringify(existingEntries));
return itemToAdd;
}

function getList(){
  //var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
  var existingEntries = JSON.parse(localStorage.getItem("ekShoppingList"));
  console.log(existingEntries);
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
  
  var shoppingListObject = {};
  var htmlShoppingItemsData = [];
  var htmlList = "";
  var htmlShoppingItem = ""; 
  $.each(shoppingList, function( key, value ){
    console.log(value);
  htmlList += '<li><a href="#'+key+'">'+key+'</a></li>';
  var shoppingItem = '<div data-role="page" id="'+key+'">'+
                     '<header data-role="header" data-add-back-btn="true">'+
                      '<h1>'+key+' : Shopping Items.</h1>'+
                     '</header>'+
                     '<div data-role="content">'+
                     '<ul data-role="listview" data-theme="b">';
  
  for(var i = 0; i<value.length; i++){
          shoppingItem += '<li><a href="#'+value[i].id+'">'+value[i].item+': '+value[i].quantity+'</a></li>';
  }
          shoppingItem += '</ul></div></div>';

          htmlShoppingItemsData.push(shoppingItem);
 });
 var shoppingListObject = {
  'shopping_lists' : htmlList,
  'shopping_lists_items' : htmlShoppingItemsData
 };
 
 return shoppingListObject;
 //return htmlList;

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
function newDeleteItem(listName, index) {

   var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));

   if(existingEntries[listName].splice(index,1)){

      localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
      return true;
   }

   return false;
        /*$.each(existingEntries[listName], function(index, result) {
        	
            if (result[property] == value) {
            	console.log(index);
                existingEntries[listName].splice(index,1);
                return false;
            }

        });  */ 

    

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

//});