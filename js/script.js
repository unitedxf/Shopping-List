 $(document).ready(function() {
 $("#add").on('click', function(){
  // fires when any LIs are clicked on
   $userinput = $("input").val();
   //Stored input field value in variable
   //$('.fa-trash').hide();
   $( "ul" ).append( $( '<li>'+$userinput+'<i class="fa fa-trash"></i></li>') );
   //Added user Input
   $('.fa-trash').show();
   $("input").val("");
   
   //Makes form empty on click
   //Remove item when click
   $('li .fa ').click (function(){
   	 //Remove item when click
   	$(this).parent().remove();
  


   });
  
   });
});

