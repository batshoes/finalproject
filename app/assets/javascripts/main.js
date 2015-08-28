$(document).ready(function() {
  

  opening();

  pageTitle();
  
  $('body').css('display', 'block');

  setupButton();

  readItAll();

  // validateForm()

  randomPage();

});

function opening() {
  $('a[data-opens]').click(function() {
    
    var openedby = $(this).attr('data-opens');
    $('[data-openedby="' + openedby +'"]').removeClass('off').addClass('on');
    
    var closedby = $(this).attr('data-opens');
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

// function validateForm() {
//    $(".message_form").validate({
// debug: true,
// rules: {
// "message[receiver_email]": {required: true, email: true},
// "message[to]": {required: true},
// "message[sender_email]": {required: true, email: true}
// }
// });
// }

function setupButton() {
  $('.button').on('click', function(){
    // validateForm(); 
    swal({  title: "Are you sure?",   
            text: "Do you want to double check your message or credentials?",  
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
                //swal("Sent!", "Your friend should get the message soon!", "success");
                //debugger;
                $('.new_message').submit();

              } else {    
                swal("Cancelled", "Read the description on the left if you're stuck :)", "error");  
              } 
            });
  });  
  $('.dead').on('click', function(){
    swal("Gone!", "This will delete the message and take you to one of my random stories")
  })
}


function pageTitle() {

  var pagetitles = ["James Middlemiss", "Hey Guys!", "It's for writers", "Invisible Ink"]
  
  var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
  
  $(document).attr('title', pagetitles[pickpagetitle]);
  
}
  
function randomPage() {
  $('.random').click(function(){

  var access_tokens = ['a769699ea127a2dfec22bb55c7f45c17', 'abc3456d4a2c828e684c9af844745631', '21f8d975ad83baced44c9c9b1b59823a','1be205fbd6e496dd452652ac8767182e']

  var random_access_token = Math.floor(Math.random()*access_tokens.length);

  location.assign("http://localhost:3000/messages/"+ access_tokens[random_access_token]);

  });
}

function randomizer() {
  $('.randomizer').on
} 

