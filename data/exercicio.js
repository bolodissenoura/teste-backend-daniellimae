const gabarito = [{"resposta": "a1"}];

const jsonData = JSON.stringify(gabarito);
const gabaritoData = JSON.parse(jsonData);

function validate() {
	gabaritoData.map((gaba) => {
		const gabaritoresposta = gaba.resposta;
		if(document.getElementById(gabaritoresposta).checked){
			document.getElementById('feedbackPositivo').style.display = 'block';
			document.getElementById('alternativas').style.display = 'none';
			document.getElementById('buttonConfirm').style.display = 'none';
		}else {
			document.getElementById('feedbackNegativo').style.display = 'block'
			document.getElementById('alternativas').style.display = 'none';
			document.getElementById('buttonConfirm').style.display = 'none';
		}
	})
	
	
}


