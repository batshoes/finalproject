$(document).ready(function() {
  

  opening();

  pageTitle();
  
  $('body').css('display', 'block');

  // setupButton();

  readItAll();

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



// function setupButton() {
//   $('.button').on('click', function(){
//     // validateForm(); 
//     swal({  title: "Are you sure?",   
//             text: "Do you want to double check your message or credentials?",  
//             type: "info",  
//             showCancelButton: true,  
//             confirmButtonColor: "#6B55",  
//             confirmButtonText: "Yes, Send It!",  
//             cancelButtonText: "I'll double check!",  
//             closeOnConfirm: false,  
//             closeOnCancel: false 
//         },
//             function(isConfirm){  
//               if (isConfirm) {    
//                 //swal("Sent!", "Your friend should get the message soon!", "success");
//                 //debugger;
//                 $('.new_message').submit();

//               } else {    
//                 swal("Cancelled", "Read the description on the left if you're stuck :)", "error");  
//               } 
//             });
//   });  
//   $('.dead').on('click', function(){
//     swal("Gone!", "This will delete the message and take you to one of my random stories")
//   })
// }


function pageTitle() {

  var pagetitles = ["James Middlemiss", "Hey Guys!", "It's for writers", "Invisible Ink"]
  
  var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
  
  $(document).attr('title', pagetitles[pickpagetitle]);
  
}
  
function randomPage() {
  $('.random').click(function(){

  var access_tokens = ['0b39d9016fcfe339597e207384e5e198', '60292e69ad738801f0ba553f27f39177', 'aa69af9d43dd491bc4982855663ca4f1']

  var random_access_token = Math.floor(Math.random()*access_tokens.length);

  location.assign("https://nameless-refuge-2654.herokuapp.com/messages/"+ access_tokens[random_access_token]);

  });
}

function randomizer() {
  $('.randomizer').on
} 

