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

    $("#items").append(row);
}