

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
    $('#amount').val(amount += selected);
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

