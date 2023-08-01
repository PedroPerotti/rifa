const modal = document.querySelector('.modal-container')
const nome = document.querySelector('#nome')
const num = document.querySelector('#num')
const nums = document.querySelector('#nums')
const numeros = document.querySelector('.numeros');

//array
vendido = [4,29,30,31,2,8,15,18,60,14,66,32,133,9,10,27,43,123,7,109,16,13,23,6,33,21,17,93,98,82,112,56,3,5,51,75,77,81,49,63,68,28,141,54,1,20,47,80,16,12]


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
