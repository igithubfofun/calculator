$(function(){

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

  function storageLog(){

  }

  var colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#16a085', '#27ae60', '#2980b9', '#8e44ad',
  '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6', '#f39c12', '#d35400', '#c0392b', '#bdc3c7'];
  var shuffledColor;

  var count = 0;
  var keyCount = 0;

  $('#equals').on('click', function(e){
    var calculation = $('#amount').val();
    if ( isNaN(calculation) ){
      var result = eval(calculation).toPrecision(2);
      $('#amount').val(result);


      var logCount = $('p.logs').length;
      count += logCount;

      keyCount += 1;

      $('#amount').val('');

      $('.numbers').css('background-color', '#34495e');
    } else {
      alert('nah');
    }

    localStorage.setItem('log' + keyCount, (calculation) + ' = ' + result);
    var log = localStorage.getItem('log' + keyCount);
    $('.logs').append('<p>' + log + '</p>');


  })

  $('.numbers').not('#equals').on('click', function(){
    var selected = $(this).text();
    var amount = $('#amount').val();

    $('#amount').val(amount += selected);

    shuffledColor = shuffle(colors)[0];
    $(this).css('background-color', shuffledColor);

  })

  $('#clear').on('click', function(){
    $('#amount').val('');
  })

  $('#amount').on('keypress', function(e){
    if (e.which === 13){
      var amount = $('#amount').val();
      var result = eval(amount);


      var logCount = $('p.logs').length;
      count += logCount;

      $('#amount').val('');
      $('.numbers').css('background-color', '#34495e');
    }

    localStorage.setItem('log' + count, (amount) + ' = ' + result.toPrecision(2) );
    var log = localStorage.getItem('log' + count);
    $('.logs').append('<p>' + log + '</p>');
  })

})

