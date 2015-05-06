 $(document).ready(function() {
     $('.fa-trash').on('click', function() {
         //Remove item when click trash can
         $(this).parent().remove();
     });
     $("#add").on('click', function() {
         // fires when any LIs are clicked on
         $userinput = $("input").val();
         //Stored input field value in variable
         $(".results").append($('<li><input type="checkbox" />' + $userinput +
             '<i class="fa fa-trash"></i></li>').addClass('items'));
         //Added user Input
         //Makes form empty on click
         $("input").val("");
         //Remove item when click on trash can
         $('.fa-trash').click(function() {
             //Remove item when click
             $(this).parent().remove();
         });

         //click or check checkbox 
         $("input[type=checkbox]").on('click', function() {
             // If checked
             $("input[type=checkbox]:checked").each(function() {
                 //hide the input check
                 $(this).hide("fast");
                 $(this).parent().addClass('checkitems strike');
                 //$('li').css("text-decoration", "line-through");
             });
         });
     });

 });