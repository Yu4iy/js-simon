// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const btn = document.querySelector('.start')
const display = document.querySelector('.display')
const timerDiplay = document.querySelector('.timer-display')
const nums = []
const numsInd = []
btn.addEventListener('click', ()=> {
	
	for(let i = 0 ; i < 5; i++){
		let num = getRndInt(10, 20);
		nums.push(num)
		display.innerHTML= nums
	}

	let timer = 5
	const secondID = setInterval(() => {
		timer--
		if(timer === 0){
			console.log('test');
			display.innerHTML = ' '
			timerDiplay.innerHTML = ' '
			
			for(let i = 0; i < 5; i++){
				const userNum = parseInt(prompt('inserire numero'))
				if(nums.includes(userNum)){
					numsInd.push(userNum)
				}
			}
			display.innerHTML = `Hai indovinato ${numsInd.length} numeri	`
			timerDiplay.innerHTML = `Numeri indovinati ${numsInd}`
			clearInterval(secondID)
		}else{
			console.log(timer);
			timerDiplay.innerHTML = timer 
		}
	}, 1000);
	
	

})













function getRndInt(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
 }