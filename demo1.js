 
    $(function() {
   $("img.lazy").lazyload();
});
 
         $(function() {
            $( "#datepicker" ).datepicker({
              dateFormat: 'dd-mm-yy',
              minDate: 0,
              beforeShowDay: function(date) {
var day = date.getDay();
return [day != 0,''];
}
            });
         });
      
 
$(window).load(function() {
    $(".pageloader").fadeOut("slow");
});
 

  
    $(document).ready(function(){
         
   
    $("#your_name").keypress(function(event){        
      var inputValue = event.charCode;
        if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)){
            event.preventDefault();
        }    
});
});
  

     

 
    $(document).ready(function(){ 
 
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
 

 
    });
 

 
  jQuery(function() {

  jQuery('.ssc-location').click(function() {

    jQuery('.address-box').hide();
    jQuery('#address-box' + $(this).attr('target')).show();
    $('.ssc-location').removeClass('ssc-active');
   $(this).addClass('ssc-active');

   $('html, body').animate({
      scrollTop: $('#address-box' + $(this).attr('target')).offset().top-210
   }, 1000);
    
  });
});
 
 
  

// When the browser is ready...
$(function() {

$.ajaxSetup({

headers: {

    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

}

});



jQuery.validator.addMethod("validate_email", function(value, element) {

if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
    return true;
} else {
    return false;
}
}, "Please enter a valid Email."); 
// Setup form validation on the #register-form element
$("#subscriber_form").validate({

    // Specify the validation rules
    rules: {
  
   your_name: "required",
  
   your_email: {
            required: true,
            validate_email: true
               }
    },
    
    // Specify the validation error messages
    messages: {
  
        your_name: "<font color='red' style='font-size: 12px;'>Please Enter Your Name</font>",
         your_email: "<font color='red' style='font-size: 12px;'>Please Enter Your valid Email Address</font>"
    },


    
    submitHandler: function(form) {

  //  $('#subscriber_form').submit();

  //return true;

    $.ajax({
            url: form.action,
            type: form.method,
            data: $(form).serialize(),
            beforeSend: function() {
        // setting a timeout
        
        $('#subscriber_submit').prop( "disabled", true );

        $('#loadme_subscriber').css('display','block');
    },
success:function(data){
 


          if (data.indexOf("success") >= 0){
  $("#responsed_subscriber").html('<div class="sak-subscribe-text">Thank You For Subscribing!</div>').focus();
    $('#loadme_subscriber').css('display','none');
    $('#subscriber_submit').prop( "disabled", false );


    form.reset();
    }
    else
    {
            $('#loadme_subscriber').css('display','none');
    $('#subscriber_submit').prop( "disabled", false );
   
$("#responsed_subscriber").html(' <div class="sak-subscribe-text">'+data+'</div>').focus();

    }
}

});

    }
});

});

 



 
    $(".photo-1").hover(
    function(){$(".laser").toggleClass('laser-hover');}
    );
    $(".photo-2").hover(
    function(){$(".dermato").toggleClass('dermato-hover');}
    );
    $(".photo-3").hover(
    function(){$(".skin").toggleClass('skin-hover');}
    );
    $(".photo-4").hover(
    function(){$(".antiaging").toggleClass('antiaging-hover');}
    );
    $(".photo-5").hover(
    function(){$(".plastic").toggleClass('plastic-hover');}
    );
    $(".photo-6").hover(
    function(){$(".hair").toggleClass('hair-hover');}
    );


    $(".laser").hover(
    function(){$(".photo-1").toggleClass('laser-hover');}
    );
    $(".dermato").hover(
    function(){$(".photo-2").toggleClass('dermato-hover');}
    );
    $(".skin").hover(
    function(){$(".photo-3").toggleClass('skin-hover');}
    );
    $(".antiaging").hover(
    function(){$(".photo-4").toggleClass('antiaging-hover');}
    );
    $(".plastic").hover(
    function(){$(".photo-5").toggleClass('plastic-hover');}
    );
    $(".hair").hover(
    function(){$(".photo-6").toggleClass('hair-hover');}
    );



 