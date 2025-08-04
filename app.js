"use strict"
//Fução do clique do butão
const botaoTrocarCor= document.getElementById('trocar-cor')

function trocarCor (){
    //getElementById pega o elemento pelo ID
    //queryselector pegamos os elementos diretamento podendo ser pela classe ou id
const cor = document.getElementById('cor').value
document.documentElement.style.setProperty('--bg-color',cor)
}

botaoTrocarCor.addEventListener('click',trocarCor)