function AddItem()
{
    var item = $("#item").val();
    var quantity = $("#quantity").val();
    var price = $("#price").val();
    
    var row = $("<div></div>").addClass("row").addClass("scItem");

    var column = $("<div></div>").addClass("col-md-1").text(item);
    row.append(column);
    column = $("<div></div>").addClass("col-md-1").text(quantity);
    row.append(column);
    column = $("<div></div>").addClass("col-md-1").text(price);
    row.append(column);

    $("#items").append(row);
}

function GetTotal(){
    var total = 0;
    $("#scItem").foreach(x => function(){
        
    } )
}