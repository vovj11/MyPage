// Pega minha lista
var btnContainer = document.getElementById("myUL");

// pega todos os itens de minha lista com a classe btn
var btns = btnContainer.getElementsByClassName("btn");

// Percorre o botão pra adicionar a classe ativa ao botão clicado
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // Se não tiver active na classe ele adiciona
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Adiciona a classe active no item da lista clicado
    this.className += " active";
  });
}
