var money = 1000
var moneyLuke = money - 150
var moneyEssenNoHelp = money - 200
var moneyEssen = moneyLuke - 200
$(document).ready(function(){
  $("button#walk").click(function(event){
    $("body").removeClass("backdrop");
    $("body").addClass("walk-backdrop");
    $("#part2-walk").show();
    $(".part1").hide();
    $("#intro").hide();
    $(".cash").text(money);
  });
  $("button#carriage").click(function(event){
    $("body").removeClass("backdrop");
    $("body").addClass("carriage-backdrop");
    $("#part2-carriage").show();
    $(".part1").hide();
    $("#intro").hide();
  });
  $("button.restart").click(function () {
    $("#part2-carriage").hide();
    $("body").removeClass();
    $("body").addClass("backdrop");
    $(".part1").show();
  });
  $("button#help").click(function () {
    $("body").removeClass("carriage-backdrop");
    $("body").addClass("part3-backdrop");
    $("#part3-help").show();
    $("#part2-walk").hide();
    $(".cash").text(moneyLuke);
  });
  $("button#noHelp").click(function () {
    $("body").removeClass("carriage-backdrop");
    $("body").addClass("part3-backdrop");
    $("#part3-noHelp").show();
    $("#part2-walk").hide();
    $(".cash").text(money);
  });
  $("button.hunger-help").click(function () {
    $("body").removeClass("part3-backdrop");
    $("body").addClass("takeFood-backdrop");
    $("#takeFood").show();
    $("#part3-help").hide();
    $(".cash").text(moneyEssen);
  });
  $("button.thirst-help").click(function () {
    $("body").removeClass("part3-backdrop");
    $("body").addClass("takeDrink-backdrop");
    $("#takeDrink").show();
    $("#part3-help").hide();
    $(".cash").text(moneyEssen);
  });
  $("button.hunger-noHelp").click(function () {
    $("body").removeClass("part3-backdrop");
    $("body").addClass("takeFood-backdrop");
    $("#takeFood").show();
    $("#part3-noHelp").hide();
    $(".cash").text(moneyEssenNoHelp);
  });
  $("button.thirst-noHelp").click(function () {
    $("body").removeClass("part3-backdrop");
    $("body").addClass("takeDrink-backdrop");
    $("#takeDrink").show();
    $("#part3-noHelp").hide();
    $(".cash").text(moneyEssenNoHelp);
  });
  $("button.restart").click(function () {
    $("#takeFood").hide();
    $("body").removeClass();
    $("body").addClass("backdrop");
    $(".part1").show();
  });
});
