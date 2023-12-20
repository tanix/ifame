$(document).ready(function(){

	// submit Form
	$("#submitBtn").click(function(e){ 
		$("#actionForm").submit(function (e) {
			    let formData = {
			      firstName: firstName,
			      lastName: lastName,
			      phone: phone,
			      email: email,
			      address: address,
			      city: city,
			      state: state,
			      zipCode: zipCode,
			      startDate: startDate,
			      startTime: startTime,
			      endTime: endTime

			    };

			    $.ajax({
			      type: "POST",
			      url: "process.php",
			      data: formData,
			      dataType: "json",
			      encode: true,
			    }).done(function (data) {
			      console.log(data);
			    });

				e.preventDefault();
			})
       

    });

	
});