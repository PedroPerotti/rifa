function msg(){
  var Nome = document.getElementById("nome").value;
  var num = document.getElementById("num").value;


var url = "https://wa.me/5512981424113?text=" + "Nome: " + Nome + "%0a"
+ "Numero: " + num;


window.open(url, '_blank').focus();

}