const modal = document.querySelector('.modal-container')
const nome = document.querySelector('#nome')
const num = document.querySelector('#num')
const nums = document.querySelector('#nums')
const numeros = document.querySelector('.numeros');

//array
vendido = [4,29,30,31,2,8,15,18,60,14,66,32,133,9,10,27,43,123,7,23,6,33,21,17,93,98,82,112,56,3,5,51,75,77,81,49,63,68,28,141,54,1,20,47,80,16,12,11,24,150,88,37,72,22,84,25,40,101,70,100,111,96,97,58,41,99,102,87,78,42,39,69,143,139,135,129,126,120,19,38,53,108,26,52,90,48,83,105,79,115,117,131,35,36,46,34,44,61,62,86,103,73,65,57,91,140,145,119,127,147,148,55,85,45,110,50,95,118,130,92,71,59,106,132,121,74,107,113,116,134,138,149,64,67,76,94,104,122,125,136,142,146,109,124,137,114,13,128,89,144]


for (var i = 1; i < 151; i++) {

  if(vendido.includes(i)){
    numeros.innerHTML += `<li class="vendidas" onclick="numescolhido()">${i}</li>`;
  }else{
    numeros.innerHTML += `<li onclick="openModal(${i})">${i}</li>`;
  }

  
}

function numescolhido(){
  alert('Número já foi escolhido!');
}

function editItem(index){
  openModal(true, index)
}
//abre o formulario 
function openModal(id){

  num.value = id
  modal.classList.add('active')


  modal.onclick = e =>{
    if(e.target.className.indexOf('modal-container') !== -1){
      modal.classList.remove('active')
    }
  }
}

function msg(){

  var nome = document.getElementById("nome").value;
  var num = document.getElementById("num").value;
  var nums = document.getElementById("nums").value;

  if (typeof nome === 'string' && nome.trim() !== "") {
  var mensagem = "Nome: " + nome + " ";
  if (typeof num === 'string' && num.trim() !== "") {
    mensagem += "Número: " + num + " ";
  }
  if (typeof nums === 'string' && nums.trim() !== "") {
    mensagem += "Mais: " + nums;
  }

  var recipientNumber = "5512996492735"; // Replace with the recipient's WhatsApp number
  var url = "https://wa.me/" + recipientNumber + "?text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank').focus();
  } else {
    alert("Por favor, preencha o campo 'Nome' antes de enviar para o WhatsApp.");
  }

}
