// tres constantes para referenciar as "ITEM" divs Projetos
const form = document.getElementById('AlbumFotos');  
// "const" = Escopo Global - boa pratica é "declar" variavel
const site = document.getElementById('Casamentos');
const port = document.getElementById('Buffet');
const videoAlbum = document.querySelector('.videoAlbum');
const videoCasamentos = document.querySelector('.videoCasamentos');
const videoBuffet = document.querySelector('.videoBuffet');


// evento de click
form.addEventListener("click",() => {
    form.classList.toggle('active');
    videoAlbum.classList.toggle('active');
});
site.addEventListener("click",() => {
    site.classList.toggle('active');
    videoCasamentos.classList.toggle('active');
});
port.addEventListener("click",() => {
    port.classList.toggle('active');
    videoBuffet.classList.toggle('active');
});