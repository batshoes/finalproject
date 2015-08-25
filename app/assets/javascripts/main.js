$(document).ready(function() {
  
  opening();

  pagetitle();
  
  $('body').css('display', 'block');
  
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


function pagetitle() {

  var pagetitles = ["My Name Is James", "Howdy Y'all", "It's Snapchat, but for the Mail"]
  
  var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
  

  $(document).attr('title', pagetitles[pickpagetitle]);
  
}

$('#parsedOutput').on('click', function() {
  return $('span.hide').first().removeClass('hide');
});

