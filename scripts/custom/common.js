function SummonConsultant(){
	var consultWindow = '<iframe width="300" height="200" class="funny-pics-subitem" src="https://www.youtube.com/embed/dMjks0tQh9A?autoplay=1&start=3" frameborder="3"></iframe>'
	var hideConsultsBtn = '<a class="btn btn-danger btn-small" id="HideConsult" onclick = "HideConsults()">Закончить консультацию</a>'
	
	var consultBox = $("#ConsultBox")
	var consultButton = $("#ConsultBtn")
	
	if (!consultBox.hasClass("ConsultOn")){
		consultBox.append(hideConsultsBtn)
		consultBox.append(consultWindow)
		consultBox.addClass("ConsultOn")
		consultButton.text("Связаться с еще одним консультантом")		
	}
	else{		
		consultBox.append(consultWindow)
	}	
}

function HideConsults() {
	var consultBox = $("#ConsultBox")
	var consultButton = $("#ConsultBtn")
	
	$('#ConsultBox > .funny-pics-subitem').remove()
	$('#HideConsult').remove()
	consultButton.text("Связаться с консультантом")
	consultBox.removeClass("ConsultOn")
}