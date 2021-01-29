



$(document).ready(function() {
  $("#formOne").change(function() {
    event.preventDefault();
    $("#formTwo").fadeIn();
  });
});

$(function(){   
  jQuery('#input_1_2 input:radio').change(function() {
      jQuery('#gform_next_button_1_4').trigger('click');
  });
});