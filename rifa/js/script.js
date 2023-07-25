const modal = document.querySelector('.modal-container')
const nome = document.querySelector('#nome')
const num = document.querySelector('#num')


//abre o formulario 
function openModal(edit = false, index =0){
  modal.classList.add('active')

  modal.onclick = e =>{
    if(e.target.classList.indexOf('modal-container') !== -1){
      modal.classList.remove('active')
    }
  }
}

function msg(){
  var Nome = document.getElementById("nome").value;
  var num = document.getElementById("num").value;


var url = "https://wa.me/5512981424113?text=" + "Nome: " + Nome + "%0a"
+ "Numero: " + num;


window.open(url, '_blank').focus();

}