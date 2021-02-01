
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let qOneInput = $("input#q1").val();
    let qTwoInput = $("input#q2").val();
    let qThreeInput = $("#q3").val();
    let qFourInput = $("input:radio[name=group1]:checked").val();
    let qFiveInput = $("input:radio[name=group2]:checked").val();
    let qSixInput = $("#color").val();
    
  
    //branching
    
    if (qFiveInput === 'mintChoco') {
      $("h4.header").fadeToggle();
      $(".language").text("Rust");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $("#intro").fadeToggle();
      $(".initially-showing").fadeToggle();
      $("#initially-hidden-rust").fadeToggle();
      $("#rust").fade.Toggle();
      $(".email").text(qTwoInput);

    } else if ((qFourInput === 'machineLearning') && (qFiveInput === 'strawberry')) {
      $("h4.header").fadeToggle();
      $(".language").text("Python");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $("#intro").fadeToggle();
      $(".initially-showing").fadeToggle();
      $("#initially-hidden-python").fadeToggle();
      $("#pythonData").fadeToggle();

    }  else if (qFourInput === 'designingWebsites') {
      $("h4.header").fadeToggle();
      $(".language").text("JavaScript");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $("#intro").fadeToggle();    
      $(".initially-showing").fadeToggle();
      $("#initially-hidden-js").fadeToggle();
      $("#js").fadeToggle();
  
    }  else if ((qFourInput === 'infrastructure') && (qFiveInput !== 'vanilla')) {
      $("h4.header").fadeToggle();
      $(".language").text("Python");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $("#intro").fadeToggle();
      $(".initially-showing").fadeToggle();
      $("#initially-hidden-python").fadeToggle();;
      $("#pythonInfra").fadeToggle();

    }  else if (qFourInput === 'unsure') {
      $("h4.header").fadeToggle();
      $(".language").text("Ruby");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $("#intro").fadeToggle();
      $(".initially-showing").fadeToggle();
      $("#initially-hidden-ruby").fadeToggle();
      $("#ruby").fadeToggle();

    } else {
      alert(" ...You may need to consider your choice in milkshakes before jumping into programming....")
    }
    


  });
});
