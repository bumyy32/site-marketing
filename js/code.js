// Inicializa a biblioteca de animação Aos
  AOS.init();
  
  // teste
  // function teste(){
  //   alert('Olá Mundo!')
  // }
  
  // document.getElementById('inicio').addEventListener('click', teste);

// Função Encapsulada: Preenche o SELECT com os dados da APi do IBGE
(function(){
  var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  var select = document.getElementById('estado');
  

  // consulta a api com o método fetch e com um laço de repetição incrementa
  // as tags option
  // fetch().then().catch();
  // O primeiro then captura os dados, e o segundo trata dos dados, e catch é o tratamento do erro, ações.
  fetch(url).then(response => response.json()).then(json => {
    var options = '<option>Selecione</option>';
    // laço de repetição 
    for (let index = 0; index < json.length; index++) {
      options += '<option>'+json[index].nome+'</option>';
    }
    select.innerHTML = options;
  }).catch(erro => console.log(erro));

})();

