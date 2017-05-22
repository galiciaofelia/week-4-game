//variables
  var number;
  var diamond = [];
  var total = 0;
  var winCounter = 0;
  var loseCounter = 0;

  $(document).ready(function() {
    function reset() {
    
    number = Math.floor((Math.random() * 101) + 19);
    $('#numbertoguess').text(number);
        for (var i = 0; i < 4; i++) {
        diamond[i] = Math.floor((Math.random() * 11) + 1);
            
        var repeat = true;
        for (var y = 0; y < i; y++) {
        if (diamond[i] === diamond[y]) {
            repeat = true; diamond[i] = Math.floor((Math.random() * 11) + 1);
            }
          }
        }
   
    total = 0;
    $("#total").html(total);
    }


//resest    
    reset();
    $("#diamond1").val(diamond[0]);
    $("#diamond2").val(diamond[1]);
    $("#diamond3").val(diamond[2]);
    $("#diamond4").val(diamond[3]);
    
    $("button").click(function() {
      total = parseInt(total) + parseInt($(this).val());  
      $("#total").html(total);
      
      if (total == number) {
      winCounter++;
      $("#wins").html("Wins: " + winCounter);
      $('#status').text('You won!');      
      setTimeout(reset);

      } else if (total > number) {
      loseCounter++;
      $("#losses").html("Losses: " + loseCounter);
      $('#status').text('You lost!')
      setTimeout(reset);
      }
    });
    
  
  });



