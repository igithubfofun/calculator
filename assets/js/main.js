

$(function(){


  $('#equals').on('click', function(e){
    var calculation = $('#amount').val();
    var result = eval(calculation).toPrecision(2);
    $('#amount').val(result);

    var timestamp = e.timeStamp;
    var date = new Date(timestamp * 1000);

    $('.logs').append('<p>' + result + '</p>');

    $('#amount').val('');

  })

  $('.numbers').not('#equals').on('click', function(){
    var selected = $(this).text();
    var amount = $('#amount').val();
    var colors = ['#1abc9c', '#2ecc71']
    $('#amount').val(amount += selected);

    function shuffle(array) {
    var counter = array.length, temp, index;
      while (counter > 0) {
          index = Math.floor(Math.random() * counter);
          counter--;
          temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
          }

          return array;
    }
    console.log(shuffle(unshift(colors)));

    $(this).css('background-color', shuffle(colors));
  })

  $('#clear').on('click', function(){
    $('#amount').val('');
  })

  $('#amount').on('keypress', function(e){
    if (e.which === 13){
      var amount = $('#amount').val();
      var result = eval(amount);
      $('.logs').append('<p>' + result + '</p>');

      $('#amount').val('');
    }
  })





})

