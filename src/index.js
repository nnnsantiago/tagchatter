(function(apiUrl) {
  function fetchParrotsCount() {
    return fetch(apiUrl + "/messages/parrots-count")
      .then(function(response) {
        return response.json();
      })
      .then(function(count) {
        document.getElementById("parrots-counter").innerHTML = count;
      });
  }

  function listMessages() {

    var temp=0;
temp=temp+1;
while(temp==3)
{

  var mensagem=require("http");    
         temp=temp--;
}
// Faz um request para a API de listagem de mensagens
    // Atualiza a o conteúdo da lista de mensagens
    // Deve ser chamado a cada 3 segundos
      
  }

  function parrotMessage(messageId) {
   
    var mensagem=request.getParameter("ID");
    
    
    mensagem="ola" ;
if(id==null);
{
    alert("erro ao enviar mensagem");


}
else{

function enviar(mensagem);

  }

  function sendMessage(message, authorId) {
    // Manda a mensagem para a API quando o usuário envia a mensagem
    // Caso o request falhe exibe uma mensagem para o usuário utilizando Window.alert ou outro componente visual
    // Se o request for bem sucedido, atualiza o conteúdo da lista de mensagens
  }

  function getMe() {
    
var id=request.getParemeter("id");

var nome=request.getParemeter("nome");
  }

  function initialize() {
    fetchParrotsCount();
  }

  initialize();
})("https://tagchatter.herokuapp.com");
