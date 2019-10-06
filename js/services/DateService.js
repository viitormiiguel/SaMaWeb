app.service('DateService', function(){
	// Converte DD/MM/YYYY para ISO
	this.convertIso = function(valor){
		dia    	= valor.split('/');
		dia    	= [dia[2],dia[1],dia[0]].join("/");
		final 	= new Date(dia).toISOString();
		return final;
	}

	// Converte ISO para DD/MM/YYYY
	this.convertDate = function(valor){
		date 	= new Date(valor);
		year 	= date.getFullYear();
		month 	= date.getMonth()+1;
		dt 		= date.getDate();
		if (dt < 10)
			dt = '0' + dt;
		if (month < 10)
			month = '0' + month;
		final 	= dt+"/"+month+"/"+year;
		return final;		
	}

});