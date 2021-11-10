// Snack 1
// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti
// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
// 3. Stampare Nome, cognome, età e codice giocatore.
// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.

const playerGeneral =	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
 	}

	 console.log(playerGeneral);
	 
	 
	 
const players = 
[
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	

]
console.log(players);



const filterMedia = players.filter((el)=> el.media > 35 && el.percentuale > 80)


console.log(filterMedia);











function getPlayerCode(){
		 const cg = []

		for(let i = 0 ; i < 3; i++){
			const words = 'QWERTYUIOPASDFGHJKLZXCVBNM';
			const number = getRndInteger(0, words.length)	 
		  words.split('')
		  const leter = words[getRndInteger(0, words.length)];
		  cg.push(leter,number)
		  
	  }
	  return cg
	  
}

	
function getRndInteger(minimum, maximum){ 
			return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

	