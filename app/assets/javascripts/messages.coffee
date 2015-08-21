# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#keyup listener on the input text field (or textarea)
$('#input').on 'keyup', ->
  val = $(this).val()
  
  #show the string as it is typed
  $('#output').html(val)
  
  #find the pipes in the string
  pipes = val.match(/\|/g)
  
  #find the number of pipes
  #if there are none, that regex above will
  #return null, so set it to 0 in that case
  #uses coffeescript specific  thing?.method
  #syntax for guarding against nonexistence
  numPipes = pipes?.length or 0
  
  #output numPipes to a div
  $("#pipeCount").text(numPipes)
  
  #stop here if there are an odd number
  #of pipes or 0 pipes
  return unless pipes? and numPipes % 2 is 0