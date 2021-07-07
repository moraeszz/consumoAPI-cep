'use strict'

const preencherFormulario =(endereco)=>{
    document.getElementById('endereço').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('cidade').value = endereco.localidade;
} 
const pesquisarCep = async() =>{
  const cep  = document.getElementById('cep').value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  const dados = await fetch(url);
  const endereco = await dados.json(); 
  if (endereco.hasOwnProperty('erro')) {
    document.getElementById('cep').classList.add('cep_errado');
    document.getElementById('cep').value = "O CEP ESTÁ ERRADO";
    document.getElementById('endereço').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
    document.getElementById('numero').value = "";


  }else{
    document.getElementById('cep').classList.remove('cep_errado')
    preencherFormulario(endereco);
  }

}
document.getElementById('cep').addEventListener('focusout',pesquisarCep);