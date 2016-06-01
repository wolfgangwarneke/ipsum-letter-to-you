
$(document).ready(function() {
  $("#nameget form").submit(function(event) {
    var yourname = $("input#yourname").val();
    console.log(yourname);
    var letter = "<h3>Dear " + yourname + ",</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor, " + yourname + ", incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h3>Yours truly,</h3><h2><em id=\"signature\">Your Secret Admirer</em>&nbsp;<span class=\"glyphicon glyphicon-heart\" aria-hidden=\"true\"></span></h2>"

    $("#yourletter").empty();
    $("#yourletter").append(letter);
    $("#yourletter").show();
    event.preventDefault();
  });

  $(".btn-danger").click(function() {
    $("#yourletter").hide();
  });
});
