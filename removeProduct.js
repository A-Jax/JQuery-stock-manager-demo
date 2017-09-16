$("#rbtn").click(function( event ) { // on button click
    event.preventDefault();
    
    const searchWord = $.trim($("#removeProduct").val()); // assign data to local variable
    
    $("#productList").empty(); // empty the DIV containg all HTML
    
    var j = products.length; // assign variable to be the length of the array
    
    for(var i = 0; i < j; i++) { // for loop, to loop through the array checking each product for a matching barcode
        
        if(searchWord == products[i].barcode) { // if the search word entered, matches the current Product object being looked at by the for loop, in the products array.

            products.splice(i , 1); // remove the product being looked at [i], once.
            j--; // once a product has been removed, reduce the array size by 1
            i--; // reduce the for loop index by 1
            
        }
        
        else { // if the product is not found, reprint the productList array to the div.
            
            $('#productList').append("<tr><td>"+ products[i].barcode + " - " + "</td><td>"+ products[i].itemCategory + " - " + "</td><td>" + products[i].Description + " - " + "</td><td>"+ products[i].cost + "</td></tr>");
  
        }
    }
   
   console.log(products); // console logging for debugging.
   
})

