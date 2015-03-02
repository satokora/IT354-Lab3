////////////////////////////
// valid.js               //
// Created by Satoko Kora //
////////////////////////////

$(document).ready(function() {
  $("#valid-button").click(function() {
    var numOfCredit = $("#credit-no").val();
    numOfCredit = numOfCredit.replace(/\D/g, "");

    if($.isNumeric(numOfCredit)){
      var nCheck = 0, nDigit = 0, bEven = false;

      for (var n = numOfCredit.length - 1; n >= 0; n--) {
      var cDigit = numOfCredit.charAt(n),
      nDigit = parseInt(cDigit, 10);

      if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
      }
       
      nCheck += nDigit;
      bEven = !bEven;
      }

      if ((nCheck % 10) == 0){
        $("#is-valid").css("display", "block");
        $("#is-valid").css("color", "green");
        $("#is-valid").text("Valid Credit Card");
      }else{
        $("#is-valid").css("display", "block");
        $("#is-valid").css("color", "red");
      $("#is-valid").text("Your Number is invalid");
      }
    }else{
      $("#is-valid").css("display", "block");
      $("#is-valid").css("color", "red");
      $("#is-valid").text("Entry should be all digits");
    }

    return false;
  });

  $('#credit-no').keyup(function(event) {
    var numOfCredit = $("#credit-no").val();
    var tempNum = numOfCredit.replace(/ /g, "");
    if($.isNumeric(tempNum)){
      $("#is-valid").css("display", "none");
      var mod = parseInt((tempNum.length) % 4);
      if(mod == 0){
        $("#credit-no").val(numOfCredit + " ");
      }
    }else{
      $("#is-valid").css("display", "block");
      $("#is-valid").css("color", "red");
      $("#is-valid").text("Entry should be all digits");
    }
  });
    

});

