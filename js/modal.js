// const inputdescricao = document.getElementById('input-descricao');
// const inputpreco = document.getElementById('input-preco');
// const inputcategoria = document.getElementById('input-categoria');
// const btnAdd = document.getElementById('btnAdd');
// const btnDelete = document.getElementById('btn-delete');
const container = document.querySelector('.container');
const abrir = document.getElementById('openModalBtn');


// inputpreco.addEventListener('change',(event)=> {
//     if(event.target.value > 0){
//         btnAdd.disabled = false;
//     }else{
//         btnAdd.disabled = true;
//     }
   
//     // console.log(event.target.value.length);
// })


abrir.addEventListener("click", function () {
    container.classList.remove('fechado');
    abrir.classList.add('fechado');
    console.log(abrir);
});

// 
// fechar.addEventListener("click", function(){
//     container.classList.add('fechado');
// })

// fechar.addEventListener("click", function(){
//     abrir.classList.remove('fechado');
// })
// btnAdd.addEventListener("click", function (){
//     const descricao = inputdescricao.value;
//     const preco = inputpreco.value;
//     const categoria = inputcategoria.value;
//     const teste = `
//     <div class='itens'>  
//         <p>${descricao}</p>
//         <p>R$ ${preco}</p>
//         <p>${categoria}</p>
//         <button class='btn-delete' >x</button>
//     </div>
//     `;
//     lista.innerHTML += teste;
//     getElements();
//     console.log(btnAdd)
// });

// function getElements() {
//     const listaItems = document.querySelectorAll('.itens');
//     listaItems.forEach(function (elemento) {
//         elemento.addEventListener('click', function () {
//             this.remove();
//         })
//     })
// }
