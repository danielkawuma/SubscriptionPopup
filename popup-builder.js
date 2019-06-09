$(document).ready(function() {

    var delay = 300; // milliseconds
    var cookie_expire = 0; // days
      //var name = ValidationEvent();
        //var name = $("#name").val("Energy");
	//var name = $('#name').val();
     // var name = "energy";
       // window.alert($('#name').val());
	//alert("The name is "+ name);

    var cookie = localStorage.getItem("list-builder");
    if(cookie == undefined || cookie == null) {
        cookie = 0;
    }

    if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => {});
        }); 

 
  
        $("button[name=subscribe]").click(() => {
		var name = $('#name').val();
		var email = $('#email').val();
		// Regular Expression For Email
                var emailReg = /(?:((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?));*)/g;

		//alert("The name is "+ name);
		if(name != "" && email != ""){
		if(email.match(emailReg)){	
           $.post($("#popup-form").attr("action"),
          { name: $("input[name=name]").val(),
	  email: $("input[name=email]").val() }, (result) => {
    $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
});}else{alert("Enter valid email address.....")}}
else{alert("All fields are required!");}
        });
           

        $("#popup-close").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("popup-builder", (new Date()).getTime());
        });
    }

});


