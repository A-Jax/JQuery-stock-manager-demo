var products = []; // Empty array to store the products in.

$('#pbtn').click(function( event ) { // on button click execute this code
  event.preventDefault();

      const barcode =  $.trim($('#barcode').val()); // assign input data to local variables
      const category = $.trim($('#category').val());
      const name =  $.trim($('#name').val());
      const price = $.trim($('#price').val());

      
      if (!barcode && !category && !name && !price) return alert("Enter Barcode and Name please"); // prevent emptying no data into the stock manager

      // Create product class. 
      var productClass = {
          barcode: barcode,
          itemCategory: category,
          Description: name,
          cost: price
      };

      // Push assigned data to products array to be stored, after being initialised in the productClass.
      products.push(productClass);


      // Insert into table
      $('#productList').append("<tr><td>"+ barcode + " - " + "</td><td>"+ category + " - " + "</td><td>" + name + " - " + "</td><td>"+ price + "</td></tr>");

      // Clear old values to enter new ones.
      $("#barcode, #category, #name, #price").val("");

});


    
