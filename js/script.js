const modal = document.querySelector('.modal-container')
const nome = document.querySelector('#nome')
const num = document.querySelector('#num')
const nums = document.querySelector('#nums')
const numeros = document.querySelector('.numeros');

//array
vendido = []


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

  var Nome = document.getElementById("nome").value;
  var num = document.getElementById("num").value;
  var nums = document.getElementById("nums").value;

  if (typeof nome === 'string' && nome.trim() !== "") {
  var mensagem = "Nome: " + nome + "%0a";
  if (typeof num === 'string' && num.trim() !== "") {
    mensagem += "Número: " + num + "%0a";
  }
  if (typeof nums === 'string' && nums.trim() !== "") {
    mensagem += "Mais: " + nums;
  }

/* var url = "https://wa.me/5512996492735?text=" + "Nome: " + Nome + "%0a"
+ "Numero: " + num + "%0a" + "Mais: " + nums; */

 /*  var recipientNumber = "5512996492735"; */ // Replace with the recipient's WhatsApp number
  var url = "https://wa.me/5512996492735?text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank').focus();
  } else {
    alert("Por favor, preencha o campo 'Nome' antes de enviar para o WhatsApp.");
}


/* window.open(url, '_blank').focus(); */

}
