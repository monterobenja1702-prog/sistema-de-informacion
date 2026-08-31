let barra = document.getElementById("barra-tragos");
let btnLista = document.getElementById("btn-lista");

let btnFernet = document.getElementById("btn-fernet");
let btnGin = document.getElementById("btn-gin");
let btnVino = document.getElementById("btn-vino");
let btnMojito = document.getElementById("btn-mojito");

function prepararTrago(nombreTrago) {
    let copaVieja = document.getElementById("obsoleto");
    if (copaVieja) {
        copaVieja.remove();
    }

    let nuevoTrago = document.createElement("p");
    nuevoTrago.textContent = nombreTrago;
    barra.appendChild(nuevoTrago);
}

btnFernet.addEventListener("click", function() {
    prepararTrago("🍹 Fernet servido!");
});

btnGin.addEventListener("click", function() {
    prepararTrago("🍸 Gin Tonic servido!");
});

btnVino.addEventListener("click", function() {
    prepararTrago("🍷 Vino Tinto servido!");
});

btnMojito.addEventListener("click", function() {
    prepararTrago("🍃 Mojito servido!");
});

btnLista.addEventListener("click", function() {
    let copaVieja = document.getElementById("obsoleto");
    if (copaVieja) {
        copaVieja.remove();
    }

    let lista = document.createElement("div");
    lista.innerHTML = "<h3>📜 Carta del Bar:</h3><ul><li>🍹 Fernet con Cola</li><li>🍸 Gin Tonic</li><li>🍷 Vino Tinto</li><li>🍃 Mojito</li></ul>";
    barra.appendChild(lista);
});