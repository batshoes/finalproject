$(document).ready(function() {
  
  var desiredtopmargin = $(window).height() * 0.08;

  $("#content").css("padding-top", desiredtopmargin);
  
  readitall();
  
  opening();
  
  // subjectline();
  
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

function readitall() {
  
  $('a[data-finished]').click(function() {
    setTimeout(function() {
      $('head').append('<link rel="stylesheet" href="finished.css" type="text/css" />');
    }, 5000);
  });
  
}

// function subjectline() {

//   var emailsubjects = ["I wanted to tell you about a dream I had", "Flattery", "One day we will meet and then, then you will be sorry", "christ this website... something is wrong with you", "Have you ever thought about what happens after you die?", "This is something I have never told anyone, but I know you won’t judge me"];

//   var pickemailsubject = Math.floor(Math.random()*emailsubjects.length);

//   $('a[href="mailto:j.o.middlemiss@gmail.com"]').attr("href", "mailto:j.o.middlemiss@gmail.com?subject=" + emailsubjects[pickemailsubject]);

// }

function pagetitle() {

  var pagetitles = ["My Name Is James", "Howdy Y'all", "It's Snapchat, but for the Mail"]
  
  var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
  

  $(document).attr('title', pagetitles[pickpagetitle]);
  
}

$('#parsedOutput').on('click', function() {
  return $('span.hide').first().removeClass('hide');
});

$('#input').on('keyup', function() {
  var i, j, n, numPipes, pipes, ref, val;
  val = $(this).val();
  $('#output').html(val);
  pipes = val.match(/\|/g);
  numPipes = (pipes != null ? pipes.length : void 0) || 0;
  $("#pipeCount").text(numPipes);
  if (!((pipes != null) && numPipes % 2 === 0)) {
    return;
  }
  n = (numPipes / 2) - 1;
  for (i = j = 0, ref = n; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    val = val.replace(/\|/, "<span class='hide'>");
  }
  val = val.replace(/\|/g, "</span>");
  return $('#parsedOutput').html(val);
});


