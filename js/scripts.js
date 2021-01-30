$(document).ready(function(){
  $('button.btn').on(click, function() {
  let nextQuestion = $(this).closest('form#form').next();

    if (nextQuestion.length !== 0) {
      $('html, form#form').animate({
          scrollTop: nextQuestion.offset().top
      }, 1000);
    }
  });
  });

