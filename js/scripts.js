// Business logic



// User interface
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let qOneInput = $("input#Q1").val();
    
    alert(qOneInput);
  });
});
