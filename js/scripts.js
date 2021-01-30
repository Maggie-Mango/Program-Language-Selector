// Business logic



// User interface
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let qOneInput = $("input#q1").val();
    let qTwoInput = $("input#q2").val();
    let qThreeInput = $("#q3").val();
    let qFourInput = $("input:radio[name=group1]:checked").val();
    let qFiveInput = $("input:radio[name=group2]:checked").val();

    
    alert(qFiveInput);
  });
});
