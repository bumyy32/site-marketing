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
  var options = '<option>Selecione</option>';

  select.innerHTML = options;
})();

