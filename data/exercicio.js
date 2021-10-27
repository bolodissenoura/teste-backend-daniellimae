const gabarito = [{"resposta": "a1"}];

const jsonData = JSON.stringify(gabarito);
const gabaritoData = JSON.parse(jsonData);

function validate() {
	gabaritoData.map((gaba) => {
		const gabaritoresposta = gaba.resposta;
		if(document.getElementById(gabaritoresposta).checked){
			console.log('AAAAAAAAAA EU NAO AGUENTO MAIS')
		}
	})
	
	
}


