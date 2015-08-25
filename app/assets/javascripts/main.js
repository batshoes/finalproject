$(document).ready(function() {
  
  opening();

  pageTitle();
  
  $('body').css('display', 'block');

  setupButton();

  readItAll();

});

function opening() {
  $('a[data-opens]').click(function() {
    
    var openedby = $(this).attr('data-opens');
    $('[data-openedby="' + openedby +'"]').removeClass('off').addClass('on');
    
    var closedby = $(this).attr('data-closes');
    $('[data-closedby="' + closedby +'"]').css('display', 'none');
    
    $(this).addClass('clicked');
    
  });
}

function readItAll() {
  $('a[data-finish]').click(function() {

    var finished = $(this).attr('data-finish');
    $('[data-finished="' + finished + '"]').removeClass('off').addClass('on');

    $(this).addClass('clicked')

    $('[data-opens]').css("text-decoration", "none")
  })
}

function setupButton() {
  $('.button').on('click', function(){
    swal({  title: "Are you sure?",   
            text: "Do you want to double check your message?",  
            type: "info",  
            showCancelButton: true,  
            confirmButtonColor: "#6B55",  
            confirmButtonText: "Yes, Send It!",  
            cancelButtonText: "I'll double check!",  
            closeOnConfirm: false,  
            closeOnCancel: false 
        },
            function(isConfirm){  
              if (isConfirm) {    
                swal("Sent!", "Your friend should get the message soon!", "success");
                //debugger;
                $('.new_message').submit();

              } else {    
                swal("Cancelled", "Read the description on the right if you're stuck :)", "error");  
              } 
            });
  });  
}


function pageTitle() {

  var pagetitles = ["James Middlemiss", "Hey Guys!", "It's Snapchat, for writers", "Invisible Ink"]
  
  var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
  

  $(document).attr('title', pagetitles[pickpagetitle]);
  
}

