const btnMostrarPJ = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

btnMostrarPJ.addEventListener("click",addClassAtivo)

function mostrarMaisPJ(){
    mostrarMaisPJ();
    btnMostrarPJ.classList.add("remover");
}

function addClassAtivo() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
    });
}
