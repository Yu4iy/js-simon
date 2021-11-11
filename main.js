// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const btn = document.querySelector('.start')
const reset = document.querySelector('.reset')
const display = document.querySelector('.display')
const timerDiplay = document.querySelector('.timer-display')

const nums = []
const numsInd = []


btn.addEventListener('click', ()=> {
	
	for(let i = 0 ; i < 5; i++){
		let num = getRndInt(10, 100);
		nums.push(num)
		display.innerHTM = nums
		btn.setAttribute('disabled', true);
	}	

		

	let timer = 30
	const secondID = setInterval(() => {
		timer--
		if(timer === 0){
			display.innerHTML = ' '
			timerDiplay.innerHTML = ' '
			getUserNumber(numsInd, nums)
		
			display.innerHTML = `Hai indovinato ${numsInd.length} numeri	`
			timerDiplay.innerHTML = `Numeri indovinati ${numsInd}`
			clearInterval(secondID)
		}else{
			console.log(timer);
			timerDiplay.innerHTML = timer 
			display.innerHTML = nums
		}

		reset.addEventListener('click', ()=>{
			btn.removeAttribute('disabled', true);
			display.innerHTML = 'Simon Says'
			clearInterval(secondID)
			timer = 30
			timerDiplay.innerHTML = timer
			nums.splice(0,nums.length)
		})
		
	}, 1000);
	
	
})



function getRndInt(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
 }


function getUserNumber(numsInd, nums){
	for(let i = 0; i < 5; i++){
		const userNum = parseInt(prompt('inserire numero'))
		if(nums.includes(userNum)){
			numsInd.push(userNum)
		}
	}
}