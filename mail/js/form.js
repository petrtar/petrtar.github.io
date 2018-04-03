
$("#contactForm").submit(function(event){
 
 event.preventDefault();
 submitForm();
});

function submitForm(){
 // Переменные с данными из формы
 var name = $("#name").val();
 var email = $("#email").val();
 var message = $("#message").val();
 
 $.ajax({
 type: "POST",
 url: "config.php",
 data: "name="+ name + "&email="+ email + "&message="+ message,
 success : function(text){
 if(text == 'ok'){
 	formSuccess();
 	console.log(text);
 } else {
	formSuccess2(text);
	console.log(text);
 }
 }
 });
}

function  formSuccess(){
 $("#msgSubmit").removeClass("hidden");
}

function  formSuccess2(elem){
 $("#msgSubmit2").removeClass("hidden").text(elem);
}

