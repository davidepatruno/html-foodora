/**********************************************/
/**********************************************/
/***** PROGETTO: FoodoraReplica - main.js **+**/
/**********************************************/
/**********************************************/
console.log('welcome to FoodoraReplica');

/*****************************/
/**********PROGRAMMA**********/
/*****************************/

$(document).ready(function() {
  $(".card").mouseenter(function() {
  /*  $(this).children(".square").addClass('active');
    $(this).children(".lettera").addClass('active');*/
    $(this).addClass('active');
  });
  $(".card").mouseleave(function() {
  /*  $(this).children(".square").removeClass('active');
    $(this).children(".lettera").removeClass('active');*/
    $(this).removeClass('active');
  });
});

/**********************************/
/*************FUNZIONI*************/
/**********************************/
