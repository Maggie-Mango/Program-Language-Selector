
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
      $("h4.header").show();
      $(".language").text("Rust");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $(".email").text(qTwoOutput);
      $("#intro").show();       
      $("#rust").show();
    } else if (qFourInput === 'machineLearning') {
      $("h4.header").show();
      $(".language").text("Python");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $("#intro").show();     
      $("#pythonData").show();
    }  else if (qFourInput === 'designingWebsites') {
      $("h4.header").show();
      $(".language").text("JavaScript");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $("#intro").show();      
      $("#js").show();
  
    }  else if (qFourInput === 'infrastructure') {
      $("h4.header").show();
      $(".language").text("Python");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $("#intro").show();       
      $("#pythonInfra").show();

    }  else if (qFourInput === 'unsure') {
      $("h4.header").show();
      $(".language").text("Ruby");
      $(".name").text(qOneInput);
      $(".date").text(qThreeInput);
      $("#intro").show();       
      $("#ruby").show();

    }
    


  });
});
