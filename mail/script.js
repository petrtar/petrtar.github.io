$(document).ready(function(){
    $( "#slider" ).slider({
        range: "min",
        animate: true,
        value: 1,
        min : 1,//Минимально возможное значение на ползунке
        max : 999,//Максимально возможное значение на ползунке
        step : 1,//Шаг, с которым будет двигаться ползунок
        slide: function(event, ui) {
                  update(1,ui.value); 
                  sum(ui.value);
              }

 });

update();
sum();
});

    $("#contentSlider1").val(0); // устанавливает значения на 0
    $("#contentSlider2").val(0);

 
            // переключатели кнопок


$('button.term').on('click', function(){ 
    $('button.term').removeClass('active');
    $(this).addClass('active');

    $('#term').val($('#squareTerm .active').val());

   sum();
});


$('button.valutes').on('click', function(event){
    $('button.valutes').removeClass('active');
    $(this).addClass('active');

    $('#valutes').val($('#squareValutes .active').val());

    sum();
});

  // данные о валюте

 function CBR_XML_Daily_Ru(rates) {
  var USDrate = rates.Valute.USD.Value;
  USDrate = Math.round(+USDrate);
  var USD = document.getElementById('USD');
  USD.value=(USDrate);  


  var GBPrate = rates.Valute.GBP.Value;
  GBPrate = Math.round(+GBPrate);
  var GBP = document.getElementById('GBP');
  GBP.value=(GBPrate);

  var EURrate = rates.Valute.EUR.Value;
  EURrate = Math.round(+EURrate);
  var EUR = document.getElementById('EUR');
  EUR.value=(EURrate);

  
}

    // анимация ползунка

 function update(slider,val) {  
        
    if(undefined === val) val = 0;
    var amount = val;

    $('#sliderVal').val(val);
    $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
        
    }


    // расчет конечного значения

function sum(val){
  if(undefined === val)
        val = $('#sliderVal').val();

  var term = Number($('#term').val());  

  var valutes = Number($('#valutes').val());

    if (0 === valutes) valutes = $('#USD').val();

  var summ = val*term*valutes;

  var summMounth;
  if (term == 1.1){
    summMounth = +'12';
  } else if (term == 1.25) {
    summMounth = +'18';
  } else { 
    summMounth = +'24';}
  
  console.log(summMounth);
  console.log(term);

  $('#contentSlider1').val(Math.round(summ)*1000);
  $('#contentSlider2').val(Math.round(summ/summMounth)*1000);
}




   