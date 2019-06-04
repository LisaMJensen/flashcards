$(function() {
  $("#java").click(function() {
  $(".word").fadeToggle();
  $(".definition").fadeToggle();
  });

  $("#op").click(function() {
  $(".word1").fadeToggle();
  $(".definition1").fadeToggle();
  });

  $("#varry").click(function() {
  $(".word2").fadeToggle();
  $(".definition2").fadeToggle();
  });

  $("#naming").click(function() {
  $(".word3").fadeToggle();
  $(".definition3").fadeToggle();
  });

  $("#functions").click(function() {
  $(".word4").fadeToggle();
  $(".definition4").fadeToggle();
  });

  $("#methods").click(function() {
  $(".word5").fadeToggle();
  $(".definition5").fadeToggle();
  });
  $("#arguments").click(function() {
  $(".word6").fadeToggle();
  $(".definition6").fadeToggle();
  });
  $("#parameters").click(function() {
  $(".word7").fadeToggle();
  $(".definition7").fadeToggle();
  });
  $("#return").click(function() {
  $(".word8").fadeToggle();
  $(".definition8").fadeToggle();
  });
  $("#chainingMethods").click(function() {
  $(".word9").fadeToggle();
  $(".definition9").fadeToggle();
});
  $("#strings").click(function() {
  $(".word10").fadeToggle();
  $(".definition10").fadeToggle();
});
  $("#booleans").click(function() {
  $(".word11").fadeToggle();
  $(".definition11").fadeToggle();
  });
  $("#undefined").click(function() {
  $(".word12").fadeToggle();
  $(".definition12").fadeToggle();
  });
  $("#nan").click(function() {
  $(".word13").fadeToggle();
  $(".definition13").fadeToggle();
  });
  $("#escape").click(function() {
  $(".word14").fadeToggle();
  $(".definition14").fadeToggle();
  });
  $("#alert").click(function() {
  $(".word15").fadeToggle();
  $(".definition15").fadeToggle();
  });
  $("#comments").click(function() {
  $(".word16").fadeToggle();
  $(".definition16").fadeToggle();
  });
  $("#jquery").click(function() {
  $(".word17").fadeToggle();
  $(".definition17").fadeToggle();
  });
  $("#attributes").click(function() {
  $(".word18").fadeToggle();
  $(".definition18").fadeToggle();
  });
  $("button#java").click(function(){
    $("ul#user").prepend("<li>A language to add function to a webpage</li>");
    alert("A programing language to add function to webpages");
  });
  $("button#op").click(function(){
    alert("An Operator is a special character that indicates an action to be performed");
  });
  $("button#varry").click(function(){
    alert("Variables can be thought of as containers used to store information. They allow for a way to label data with a descriptive name.");
  });
  $("button#naming").click(function(){
    alert("Use camelCase to make it clear which are variables");
  });
  $("button#functions").click(function(){
    alert("An Operator is a special character that indicates an action A function is something that performs an action.");
  });
  $("button#methods").click(function(){
    alert("An action that a number can perform or have taken on it");
  });
  $("button#arguments").click(function(){
    alert("is what you pass into a function or method");
  });
  $("button#parameters").click(function(){
    alert("Is a variable that's assigned to the argument.");
  });
  $("button#return").click(function(){
    alert("A way of asking for the result from a function");
  });
  $("button#chainingMethods").click(function(){
    alert("Calling a method directly on the return value of another method.");
  });
  $("button#strings").click(function(){
    alert("JavaScript data type that represents the exact text of whatever is enclosed in the quotes");
  });
  $("button#booleans").click(function(){
    alert("Only true or false");
  });
  $("button#undefined").click(function(){
    alert("An object such as a variable without a defined value");
  });
  $("button#nan").click(function(){
    alert("Not a number, which is a type of number");
  });
  $("button#escape").click(function(){
    alert("Tells JavaScript that the \" that comes right after it is not the end of the string, but a character inside");
  });
  $("button#alert").click(function(){
    alert("Used to display information to the user, a way of outputting not collecting information");
  });
  $("button#comments").click(function(){
    alert("everything after // or between /*  */ is a comment and will be ignored");
  });
  $("button#jquery").click(function(){
    alert("A javascript library");
  });
  $("button#attributes").click(function(){
    alert("A javascript library");
  });
});
