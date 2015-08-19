$(document).ready(function() {
  
  var desiredtopmargin = $(window).height() * 0.08;

  $("#content").css("padding-top", desiredtopmargin);
  
  readitall();
  
  opening();
  
  subjectline();
  
  pagetitle();
  
  $('body').css('display', 'block');

  // condense();

  
});

function condense() {
  myArr = string.split(/[.|,]/);
  return myArr
}

function opening() {
  $('a[data-opens]').click(function() {
    
    var openedby = $(this).attr('data-opens');
    $('[data-openedby="' + openedby +'"]').removeClass('off').addClass('on');
    
    var closedby = $(this).attr('data-closes');
    $('[data-closedby="' + closedby +'"]').css('display', 'none');
    
    $(this).addClass('clicked');
    
  });
}

function readitall() {
  
  $('a[data-finished]').click(function() {
    setTimeout(function() {
      $('head').append('<link rel="stylesheet" href="finished.css" type="text/css" />');
    }, 5000);
  });
  
}

function subjectline() {

  var emailsubjects = ["I wanted to tell you about a dream I had", "Flattery", "One day we will meet and then, then you will be sorry", "christ this website... something is wrong with you", "Have you ever thought about what happens after you die?", "This is something I have never told anyone, but I know you won’t judge me"];

  var pickemailsubject = Math.floor(Math.random()*emailsubjects.length);

  $('a[href="mailto:alantrotter@gmail.com"]').attr("href", "mailto:alantrotter@gmail.com?subject=" + emailsubjects[pickemailsubject]);

}

function pagetitle() {

  var pagetitles = ["My Name Is James", "Howdy Y'all", "It's Snapchat, but for the Mail"]
  
  var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
  

  $(document).attr('title', pagetitles[pickpagetitle]);
  
}
