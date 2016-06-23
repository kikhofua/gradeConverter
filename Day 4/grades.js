$(document).ready(function() {

	$("#convert").click(function(){

		var number = parseInt(document.getElementById('number').value);
		var letter = document.getElementById('letter');
		//console.log(number);
		switch(true){
			case 89.4<number && number <100.1:
				letter.value = "A";
				break;
			case 79.4<number && number<90.0:
				letter.value = "B";
				break;
			case 69.4<number && number<80.0:
				letter.value = "C";
				break;
			case 59.4<number && number<70.0:
				letter.value = "D";
				break;
			case number<59.5:
				letter.value = "F";
				break;
			case 100.1<number && number < 500.1:
				letter.value = "Mega A!";
				break;
			case number > 500.1:
				letter.value = "Super Mega A!";
				break;
			default:
				if (typeof number != 'number') {
					alert("Please enter a number value");
				}
		}
		document.getElementById('number').value = '';
	});
});