/*let nums = document.getElementsByName("um");
console.log(nums);

document.getElementById("num").innerHTML = nums[0].defaultValue;


let num2 = document.getElementsByName("dois");
console.log(num2);

document.getElementById("num").innerHTML = num2[0].defaultValue;*/

const cards = document.querySelectorAll('.card');

cards.forEach(card =>{
	card.addEventListener('click', () =>{
		removeClass();
		card.classList.add('active');
	});
});

function removeClass(){
	cards.forEach(card=>{
		card.classList.remove('active');
	});
}