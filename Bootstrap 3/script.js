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

    $("#contentSlider1").val(0); // устанавливает значения на 0
    $("#contentSlider2").val(0);

    update();




            // переключатели кнопок


$('button.term').on('click', function(event){ 
    $('button.term').removeClass('active');
    $(this).addClass('active');

    $('button.term').val(this.value);

    sum();
});


$('button.valutes').on('click', function(){
    $('button.valutes').removeClass('active');
    $(this).addClass('active');

    $('button.valutes').val(this.value);

    sum();
});

});

 function update(slider,val) {  // анимация ползунка
        
        var $amount = slider == 1?val:$("#contentSlider1").val();   


        $( "#contentSlider1" ).val($amount);
        $( "#contentSlider2" ).val($amount*2);
         $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
        
    }

function sum(val){
  var term = $('button.term').val();
  var valutes = $('button.valutes').val();
  var summa = val*term*valutes;



  $( "#contentSlider1" ).val(summa);
  $( "#contentSlider2" ).val(summa*2);
}




    function CBR_XML_Daily_Ru(rates) {
  var USDrate = rates.Valute.USD.Value.toFixed(4).replace('.', ',');
  var USD = document.getElementById('USD');
  USD.innerHTML = USD.innerHTML.replace('00,0000', USDrate);

  var GBPrate = rates.Valute.GBP.Value.toFixed(4).replace('.', ',');
  var GBP = document.getElementById('GBP');
  GBP.innerHTML = GBP.innerHTML.replace('00,0000', GBPrate);

  var EURrate = rates.Valute.EUR.Value.toFixed(4).replace('.', ',');
  var EUR = document.getElementById('EUR');
  EUR.innerHTML = EUR.innerHTML.replace('00,0000', EURrate);

  
}
    
