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


            // переключатели кнопок


$('button.term').on('click', function(event){ 
    $('button.term').removeClass('active');
    $(this).addClass('active');

    var id = $(this).attr("id");

    var elem=document.getElementById(id);
    $('button.term').val(elem.value);

    sum();
});


$('button.valutes').on('click', function(event){
    $('button.valutes').removeClass('active');
    $(this).addClass('active');

    var id = $(this).attr("id");

    var elem=document.getElementById(id);
    $('button.valutes').val(elem.value);
    
    sum();
});

update(); 

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

  console.log(term);
  console.log(valutes);

  $( "#contentSlider1" ).val(summa);
  $( "#contentSlider2" ).val(summa*2);
}




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
    
