//$(document).ready(function(){

 //alert('hello');
 $.mobile.document.on("pagebeforecreate","#index",function(){
//localStorage.removeItem("ekShoppingList");
  showHomepage();

});
function showHomepage(){
var shoppingList = JSON.parse(localStorage.getItem("ekShoppingList"));
if($.isEmptyObject(shoppingList)){
  return false;
}
var shoppingListObject = {};
  var htmlShoppingItemsData = [];
  var htmlDialogData = [];
  var editDialogData = [];
  var editQuantityData = [];
  var htmlList = "";
  var htmlDialog = "";
  var editDialog = "";
  var editQuantity = "";
  var htmlShoppingItem = "";
  var index = 0;
  $.each(shoppingList, function( key, value ){
    index++;
    //console.log(value.length);
  var originalKey = key;
  var snakeCaseKey = key.split(" ");
  if(snakeCaseKey.length > 1){
      key = snakeCaseKey.join("_");
  }

  $.mobile.document.on( "input", "#"+key+"-new-list-item", function() {
var availableTags = [
  "Egg",
  "Butter",
  "Orange",
  "Cheese",
  "Meat",
  "Pasta",
  "Rice",
  "Oil",
  "Cereal",
  "Bread",
  "Meat",
  "Fish",
  "Chicken",
  "Turkey Breast",
  "Salmon",
  "Flour",
  "Mustard",
  "Tomatoes",
  "Pepper",
  "Salt",
  "Peas",
  "Shrimp",
  "Broccoli",
  "Spinach",
  "Carrot",
  "Oats",
  "Juice",
  "Ice Cream",
  "Frozen Yogurt",
  "Peanuts",
  "Walnuts",
  "Chocolate",
  "Biscuit",
  "Banana",
  "Oranges",
  "Mangoes",
  "Potatoes",
  "Tea",
  "Water",
  "Cauliflower",
  "Detergent",
  "Milk",
  "Sugar",
  "Salt",
  "Soap",
  "Cucumber",
  "Lettuce",
  "Onions",
  "Apple",
  "Avocado",
  "Berries",
  "Baked Beans",
  "Vinegar",
  "Mayonaise",
  "Honey",
  "Ketchup",
  "Jam",
  "Crab",
  "Shampoo",
  "Toothpaste",
  "Toilet Paper",
  "Paper Towel"
];
$( "#"+key+"-new-list-item" ).autocomplete({
source: availableTags
});
});

  //htmlList += '<li><a href="#'+key+'">'+originalKey+'</a></li>';
  htmlList += '<tr id="'+key+'Delete">'+
                    '<th>'+index+'</th>'+
                    '<td><a href="#'+key+'">'+originalKey+'</a></td>'+
                    '<td>'+value.length+'</td>'+
                    '<td><a  class="ui-btn ui-btn-inline ui-icon-delete ui-btn-icon-notext ui-corner-all"  style="color: red;" data-shopping-list=\'{"shoppingList":"'+key+'", "count":"'+key+'"}\' href="#'+key+'Dialog"></a>'+
                    '&nbsp;<a class="ui-btn ui-btn-inline ui-icon-edit ui-btn-icon-notext ui-corner-all"  style="" data-shopping-list=\'{"shoppingList":"'+key+'", "count":"'+key+'"}\' href="#'+key+'Edit"></a></td>'+
              '</tr>';
  htmlDialog = '<div data-role="page" data-overlay-theme="a" data-dialog="true" id="'+key+'Dialog">'+
                '<div data-role="header">'+
                  '<h1>Confirm Deltet!</h1>'+
                '</div>'+
                '<div data-role="main" class="ui-content">'+
                  '<p>Do you really want to delete '+originalKey+' shopping list ??</p>'+
                  '<button class="ui-btn ui-btn-inline delete-shopping-list" style="background-color: red; color: white;" data-shopping-list=\'{"shoppingList":"'+key+'", "count":"'+key+'"}\'>Yes</button>'+
                  '<a class="ui-btn ui-btn-inline" data-rel="back" ref="#index">No</a>'+
                '</div>'+
              '</div>';
  editDialog = '<div data-role="page" data-overlay-theme="a" data-dialog="true" id="'+key+'Edit">'+
                '<div data-role="header">'+
                  '<h1>Change Shopping List Name!</h1>'+
                '</div>'+
                '<div data-role="main" class="ui-content">'+
                  '<p>You are about to change '+originalKey+' name. Please enter new name in the input below</p>'+
                  '<input type="text" name="edit-shopping-list" id="update'+key+'" placeholder="new shopping list name" value="">'+
                  '<button class="ui-btn ui-btn-inline edit-shopping-list" id="update'+key+'Btn" style="background-color: green; color: white;" data-shopping-list=\'{"shoppingList":"'+key+'", "count":"'+key+'"}\'>save</button>'+
                  '<a class="ui-btn ui-btn-inline" data-rel="back" ref="#index">cancel</a>'+
                '</div>'+
              '</div>';
  var shoppingItem = '<div data-role="page" id="'+key+'">'+
                     '<header data-role="header" href="#index" data-add-back-btn="true">'+
                      '<h1><span><a href="#index" title="go to home">'+originalKey+' : Shopping Items.</a></span></h1>'+
                     '</header>'+
                     '<div data-role="content">'+
                     // '<h3>'+originalKey+' : Shopping Items.</h3>'+
                     '<div class="ui-field-contain">'+
                     '<fieldset data-role="controlgroup" data-type="horizontal">'+
                     //<a href="#" class="ui-shadow ui-btn ui-corner-all ui-icon-grid ui-btn-icon-right">Three</a>
                      '</fieldset>'+
                      '</div>'+
                      '<form name="'+key+'" id="'+key+'">'+
                       '<div class="ui-grid-b ui-responsive">'+
                       '<div class="ui-block-a" style="margin-right: 5px;">'+
                            '<input type="text" name="new-shopping-list" class="new-list-item" id="'+key+'-new-list-item" placeholder="add new item to list" value="" required>'+
                       '</div>'+
                       '<div class="ui-block-b">'+
                            '<input type="text" name="quantity" class="quantity" id="'+key+'-quantity" placeholder="qty" value="" required>'+
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
          var purchased = '';
          if(value[i].status == 'bought'){
              purchased = 'redRow';
          }
          shoppingItem += '<tr class="'+purchased+'">'+
                           '<th>'+j+'</th>'+
                           '<td>'+value[i].item+'</td>'+
                           '<td id="'+key+'-'+value[i].item+'Quantity">'+value[i].quantity+'</td>'+
                           '<td><a class="delete-item"  style="margin-right: 5px; color: red;" data-shopping-list=\'{"shoppingList":"'+key+'", "item":"'+value[i].id+'"}\' href="'+value[i].item+'">delete</a>'+
                           '<a class="purchase-item"  style="margin-left: 5px;" data-shopping-list=\'{"shoppingList":"'+key+'", "item":"'+value[i].id+'"}\' href="'+value[i].item+'">purchase</a>'+
                           '<a class="edit-quantity"  style="margin-left: 5px;" data-shopping-list=\'{"shoppingList":"'+key+'", "item":"'+value[i].id+'"}\' href="#'+key+'Edit'+value[i].item+'">edit</a></td>'+
                           '</tr>';
                            //'<p><span>'+value[i].item+'</span>: <span style="margin-right: 5%">'+value[i].quantity+'</span><a>delete</a></p>';
      editQuantity = '<div data-role="page" data-overlay-theme="a" data-dialog="true" id="'+key+'Edit'+value[i].item+'">'+
                '<div data-role="header">'+
                  '<h1>Change Shopping Item Quantity!</h1>'+
                '</div>'+
                '<div data-role="main" class="ui-content">'+
                  '<p>You are about to change '+value[i].item+' of quantity '+value[i].quantity+'. Enter new quantity below</p>'+
                  '<input type="number" name="edit-shopping-list-item" id="update'+key+'-'+value[i].item+'" placeholder="quantity" value="">'+
                  '<button class="edit-shopping-list-item ui-btn ui-btn-inline" id="update'+key+'-'+value[i].item+'Btn" style="background-color: green; color: white;" data-shopping-list=\'{"shoppingList":"'+key+'", "item":"'+value[i].item+'", "quantity":"'+value[i].quantity+'"}\'>save</button>'+
                  '<a class="ui-btn ui-btn-inline" data-rel="back" ref="#'+key+'Edit'+value[i].item+'">cancel</a>'+
                '</div>'+
              '</div>';

              editQuantityData.push(editQuantity);
  }
          shoppingItem += '</tbody></table></div></div>';

          htmlShoppingItemsData.push(shoppingItem);
          htmlDialogData.push(htmlDialog);
          editDialogData.push(editDialog);
          //editQuantityData.push(editQuantity);
 });
 var shoppingListObject = {
  'shopping_lists' : htmlList,
  'shopping_lists_dialog' : htmlDialogData,
  'edit_shopping_lists_dialog' : editDialogData,
  'shopping_lists_items' : htmlShoppingItemsData
 };
 myList = shoppingListObject.shopping_lists;
  var listItems = shoppingListObject.shopping_lists_items;
  var myListDialogs = shoppingListObject.shopping_lists_dialog;
  //console.log(myList);

     $('#display-shopping-list').html(myList);
     if(myListDialogs.length > 0){
    for(var j = 0; j < myListDialogs.length; j++){

      $( "body" ).append(myListDialogs[j]);
      $( "body" ).append(editDialogData[j]);

    }
    if(listItems.length > 0){
    for(var j = 0; j < listItems.length; j++){

      $( "body" ).append(listItems[j]);

    }
  }
  if(editQuantityData.length > 0){
    for(var j = 0; j < editQuantityData.length; j++){
       console.log(editQuantityData[j]);
      $( "body" ).append(editQuantityData[j]);

    }
  }

  }

}
function refreshPage() {
  $.mobile.back();

  /*$.mobile.changePage(
    window.location.href,
    {
      allowSamePageTransition : true,
      transition              : 'none',
      showLoadMsg             : false,
      reloadPage              : true
    }
  );*/
  //showHomepage();
}
  /*$.mobile.document.on('pagebeforeshow', function() {
    alert($.mobile.activePage.attr('id'));
  });*/
  $.mobile.document.on( "click", "#add-shopping-item", function() {

  var newItem = $('#new-shopping-list').val();
  var originalItem = newItem;
  var snakeCaseKey = newItem.split(" ");
  if(snakeCaseKey.length > 1){
      newItem = snakeCaseKey.join("_");
  }
  var shoppingLists = creatNewList(newItem);
  var totalShoppingList = Object.keys(shoppingLists).length;
  // var totalShoppingList = shoppingLists.length;
  //showHomepage();
   //$("#index").enhanceWithin();
  //var htmlList = '<li><a href="#'+newItem+'">'+originalItem+'</a></li>';
  var htmlList ='<tr id="'+newItem+'Delete">'+
                    '<th>'+totalShoppingList+'</th>'+
                    '<td><a href="#'+newItem+'">'+originalItem+'</a></td>'+
                    '<td>0</td>'+
                    '<td><a  class="ui-btn ui-btn-inline ui-icon-delete ui-btn-icon-notext ui-corner-all"  style="color: red;" data-shopping-list=\'{"shoppingList":"'+newItem+'", "count":"'+newItem+'"}\' href="#'+newItem+'Dialog"></a>'+
                    '&nbsp;<a class="ui-btn ui-btn-inline ui-icon-edit ui-btn-icon-notext ui-corner-all"  style="" data-shopping-list=\'{"shoppingList":"'+newItem+'", "count":"'+newItem+'"}\' href="#'+newItem+'Edit"></a></td>'+
              '</tr>';

  var shoppingItem = '<div data-role="page" id="'+newItem+'">'+
                     '<header data-role="header" data-add-back-btn="true">'+
                      '<h1>'+originalItem+' : Shopping Items.</h1>'+
                     '</header>'+
                     '<div data-role="content">'+
                     // '<h3>'+originalKey+' : Shopping Items.</h3>'+
                     '<div class="ui-field-contain">'+
                     '<fieldset data-role="controlgroup" data-type="horizontal">'+
                     //<a href="#" class="ui-shadow ui-btn ui-corner-all ui-icon-grid ui-btn-icon-right">Three</a>
                      '</fieldset>'+
                      '</div>'+
                      '<form name="'+newItem+'" id="'+newItem+'">'+
                       '<div class="ui-grid-b ui-responsive">'+
                       '<div class="ui-block-a" style="margin-right: 5px;">'+
                            '<input type="text" name="new-shopping-list" class="new-list-item" id="'+newItem+'-new-list-item" placeholder="add new item to list" value="" required>'+
                       '</div>'+
                       '<div class="ui-block-b">'+
                            '<input type="text" name="quantity" class="quantity" id="'+newItem+'-quantity" placeholder="qty" value="" required>'+
                       '</div>'+
                         '<div class="ui-block-c">'+
                            '<a href="#" data-'+newItem+'-list="'+newItem+'" class="ui-btn ui-corner-all ui-shadow add-list-item" id="'+newItem+'-add-list-item">Add Item</a>'+
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
                         '<tbody id="'+newItem+'">'+
                         '</tbody></table></div></div>';
  var htmlDialog = '<div data-role="page" data-overlay-theme="a" data-dialog="true" id="'+newItem+'Dialog">'+
                '<div data-role="header">'+
                  '<h1>Confirm Deltet!</h1>'+
                '</div>'+
                '<div data-role="main" class="ui-content">'+
                  '<p>Do you really want to delete '+originalItem+' shopping list ??</p>'+
                  '<button class="ui-btn ui-btn-inline delete-shopping-list" style="background-color: red; color: white;" data-shopping-list=\'{"shoppingList":"'+newItem+'", "count":"'+newItem+'"}\'>Yes</button>'+
                  '<a class="ui-btn ui-btn-inline" data-rel="back" ref="#index">No</a>'+
                '</div>'+
              '</div>';
  var editDialog = '<div data-role="page" data-overlay-theme="a" data-dialog="true" id="'+newItem+'Edit">'+
                '<div data-role="header">'+
                  '<h1>Change Shopping List Name!</h1>'+
                '</div>'+
                '<div data-role="main" class="ui-content">'+
                  '<p>You are about to change '+originalItem+' name. Please enter new name in the input below</p>'+
                  '<input type="text" name="edit-shopping-list" id="update'+newItem+'" placeholder="new shopping list name" value="">'+
                  '<button class="ui-btn ui-btn-inline edit-shopping-list" id="update'+newItem+'Btn" style="background-color: green; color: white;" data-shopping-list=\'{"shoppingList":"'+newItem+'", "count":"'+newItem+'"}\'>save</button>'+
                  '<a class="ui-btn ui-btn-inline" data-rel="back" ref="#index">cancel</a>'+
                '</div>'+
              '</div>';

   console.log(htmlList);
    $( htmlList ).appendTo("#display-shopping-list");
    $( "body" ).append(shoppingItem);
    $( "body" ).append(htmlDialog);
    $( "body" ).append(editDialog);
    $("#display-shopping-list").trigger("refresh");

});
  $.mobile.document.on( "click", ".delete-shopping-list", function() {
    //var itemId = $(this).data("shoppingList").item;

    var shoppingList = $(this).data("shoppingList").shoppingList;
    console.log(shoppingList);

    console.log(deleteList(shoppingList));
    var tr = $("#"+shoppingList+"Delete");
    //var tr = $(this).closest('tr');
    tr.css("background-color","#FF3700").trigger('create');
    //tr.toggleClass('redRow').trigger('create');
    tr.fadeOut(400, function(){
      tr.remove();
    });
    //refreshPage();
    showHomepage();
    $('#index').trigger('refresh');

    //$.mobile.back();
    $.mobile.back();
    return false;


});
  $.mobile.document.on( "click", ".edit-shopping-list", function() {
    //var itemId = $(this).data("shoppingList").item;

    var shoppingList = $(this).data("shoppingList").shoppingList;
    console.log(shoppingList);
    var newName = $("#update"+shoppingList).val();
    console.log(shoppingList, newName);
    //return false;
    console.log(updateListName(shoppingList, newName));
    showHomepage();
    $('#index').trigger('refresh');

    //$.mobile.back();
    $.mobile.back();
    return false;


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
  console.log(addedItem);
  if(addedItem.status == 'updated'){

      $('#'+shoppingList+'-'+newItem+'Quantity').text(addedItem.quantity);
      return false;
  }

  var addedItemId = addedItem.id;
console.log(addedItemId);

  var addedItemIndex = addedItemId + 1;
  //return false;
  //var htmlList = '<li><a href="#'+newItem+'">'+newItem+'</a></li>';
  var shoppingItem = '<tr>'+
                           '<th>'+addedItemIndex+'</th>'+
                           '<td>'+newItem+'</td>'+
                           '<td id="'+shoppingList+'-'+newItem+'Quantity">'+quantity+'</td>'+
                           '<td><a class="delete-item"  style="margin-right: 5px; color: red;" data-shopping-list=\'{"shoppingList":"'+shoppingList+'", "item":"'+addedItemId+'"}\' href="'+newItem+'">delete</a>'+
                           '<a class="purchase-item"  style="margin-left: 5px;" data-shopping-list=\'{"shoppingList":"'+shoppingList+'", "item":"'+addedItemId+'"}\' href="'+newItem+'">purchase</a>'+
                           '<a class="edit-quantity"  style="margin-left: 5px;" data-shopping-list=\'{"shoppingList":"'+shoppingList+'", "item":"'+addedItemId+'"}\' href="'+newItem+'">edit</a></td>'+
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
    //$( shoppingItem ).appendTo("#"+shoppingList).trigger( "create" );
    $( shoppingItem ).appendTo('tbody[id='+shoppingList+']').trigger( "create" );
    //$( "body" ).append(shoppingItem);
    //$("#"+shoppingList).table("refresh");

});
$.mobile.document.on( "click", ".delete-item", function() {
  //var newItem = $('#new-shopping-list').val();
  //alert('you clicked delete');

  var itemId = $(this).data("shoppingList").item;
  var shoppingList = $(this).data("shoppingList").shoppingList;
  console.log(itemId, shoppingList);
  //return false;
  //console.log(newDeleteItem(shoppingList, itemId));
  console.log(deleteItem(shoppingList, itemId));
  var tr = $(this).closest('tr');
  tr.css("background-color","#FF3700").trigger('create');
  //tr.toggleClass('redRow').trigger('create');
  tr.fadeOut(400, function(){
    tr.remove();
  });
  showHomepage();
  $('#index').trigger('refresh');
  return false;

});
$.mobile.document.on( "click", ".purchase-item", function() {

  var itemId = $(this).data("shoppingList").item;
  var shoppingList = $(this).data("shoppingList").shoppingList;
  console.log(itemId, shoppingList);
  //return false;
  //console.log(newDeleteItem(shoppingList, itemId));
  var tr = $(this).closest('tr');

  console.log(updateStatus(shoppingList, itemId));
  tr.toggleClass('redRow').trigger('create');
  return false;

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
	var newShoppingList = {};
	newShoppingList[newItem] = [];
  //existingEntries[newItem] = newShoppingList;
  $.extend(existingEntries, newShoppingList );

  localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
  // return JSON.stringify(existingEntries)
  console.log(existingEntries);
  return existingEntries;
}
$.mobile.document.on( "click", ".edit-shopping-list-item", function() {
    //var itemId = $(this).data("shoppingList").item;

    var shoppingList = $(this).data("shoppingList").shoppingList;
    var shoppingListItem = $(this).data("shoppingList").item;
    //var itemQuantity = $(this).data("shoppingList").shoppingList;
    console.log(shoppingList, shoppingListItem);
    var newQunatity = $("#update"+shoppingList+"-"+shoppingListItem).val();
    console.log(shoppingList, shoppingListItem, newQunatity);
    //return false;
    console.log(updateQuantity(shoppingList, shoppingListItem, newQunatity));
    showHomepage();
    $('#index').trigger('refresh');
    $('#'+shoppingList+'-'+shoppingListItem+'Quantity').text(newQunatity);

    //$.mobile.back();
    $.mobile.back();
    return false;


});

//adding item to a shopping list
//require: listName
function addItem(listName, item, quantity){
  console.log(listName, item, quantity);
  //return false;
  var myShoppingLists = "ekShoppingList";
	var existingEntries = JSON.parse(localStorage.getItem("ekShoppingList"));
	/*var entryItem = $("#item").val();
    var entryQty = $("#quantity").val();*/
    //console.log(typeof existingEntries);
    //console.log(existingEntries[listName]);
    //return false;
   var len = existingEntries[listName].length-1;
   var i = 0;
   if(len == -1){
        i=1
    }else{
          //$.each(existingEntries[listName], function(index, result) {
          for(var j = 0; j < existingEntries[listName].length; j++){
              if(existingEntries[listName][j].item == item){

                    var itemIndex = existingEntries[listName][j].id;
                    //existingEntries[listName].splice(index,1);
                    quantity = Number(existingEntries[listName][j].quantity) + Number(quantity);
                    existingEntries[listName][j].quantity =  quantity;
                    localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
                    console.log(itemIndex, quantity, listName);
                    console.log('good');
                    var returnData = {
                      'status' : 'updated',
                      'quantity' : quantity
                    }
                    return returnData;
                    //break;
                    //deleteItem(listName, itemIndex);

              }
          }
            /*if (result.item == item) {
                console.log(index);
                //existingEntries[listName].splice(index,1);
                deleteItem(listName, item);
                quantity = result.quantity + quantity;
                //return false;
            }*/

          //});
          i = existingEntries[listName][len];
	        i = i.id + 1;
	        //i = i+1;
  }
  //console("not good");
  //return false;
	console.log(i);
  var itemToAdd = {"id": i, "item": item, "quantity": quantity, "status": "new"};

  existingEntries[listName].push(itemToAdd);

  localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
  console.log(JSON.stringify(existingEntries));
  showHomepage();
  $('#index').trigger('refresh');
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

//function updateStatus(listName, property, value){
function updateStatus(listName, value){
   var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
   console.log(existingEntries[listName]);
   //return;
   $.each(existingEntries[listName], function(index, result) {

            if (result.id == value) {
              console.log(index);
              if(existingEntries[listName][index].status == 'new'){
                existingEntries[listName][index].status = "bought";
              }else if(existingEntries[listName][index].status == 'bought'){

                existingEntries[listName][index].status = "new";
              }

                return false;
            }

        });


    localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
    return existingEntries[listName];
}
function updateQuantity(listName, item, quantity){
   var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
   console.log(existingEntries[listName]);
   //return;
   $.each(existingEntries[listName], function(index, result) {

            if (result.item == item) {
              console.log(index, result);
              existingEntries[listName][index].quantity = quantity;
              /*if(existingEntries[listName][index].status == 'new'){
                existingEntries[listName][index].status = "bought";
              }else if(existingEntries[listName][index].status == 'bought'){

                existingEntries[listName][index].status = "new";
              }*/

                return false;
            }

        });


    localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
    return existingEntries[listName];
}
function updateListName(listName, newName){
	 var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
   existingEntries[newName] = existingEntries[listName];
   delete existingEntries[listName];
   localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
   return existingEntries[newName];
}

   function deleteItem1(listName, index) {
   var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
   existingEntries[listName].splice(index,1);

    localStorage.setItem(myShoppingLists, JSON.stringify(existingEntries));
	console.log(JSON.stringify(existingEntries));
}

//to-do work on item name
   // function deleteItem(listName, property, value) {
   function deleteItem(listName, value) {
   var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
        $.each(existingEntries[listName], function(index, result) {

            if (result.id == value) {
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
  return true;
}

function showList(){
	var existingEntries = JSON.parse(localStorage.getItem(myShoppingLists));
	console.log(JSON.stringify(existingEntries));

}

//});
